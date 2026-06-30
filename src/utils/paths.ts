import { createI18nCollection, i18nPropsAndParams, resolvePath as originalResolvePath } from "astro-loader-i18n";
import { C, localeSlugs, type Locale } from "../site.config";
import { getEntry, type CollectionKey, type DataEntryMap } from "astro:content";
import type { ImageMetadata } from "astro";
import { parseLocale } from "./i18n";

const PROTOCOL_DELIMITER = "://";
const ID_DELIMITER = "#";

export const defaultPropsAndParamsOptions = {
  defaultLocale: C.DEFAULT_LOCALE,
  segmentTranslations: C.SEGMENT_TRANSLATIONS,
};

export const replaceSegmentsInPath = (path: string, locale: Locale) => {
  Object.entries(C.SEGMENT_TRANSLATIONS[locale]).forEach(([key, value]) => {
    path = path.replace(key, value);
  });
  return path;
};

export const resolvePath = (...path: Array<string | number | undefined>) => {
  return originalResolvePath(import.meta.env.BASE_URL, ...path);
};

export const resolveSimplePath = async <E extends keyof DataEntryMap["navigation"] | (string & {})>(
  id: E,
  path: string,
  currentLocale: Locale,
) => {
  const navigation = await getEntry("navigation", `${id}/${currentLocale}`);
  if (!navigation) throw new Error(`Navigation entry not found`);

  const items = navigation.data.items;

  if (!Array.isArray(items)) {
    throw new Error(`Navigation entry not found`);
  }

  const [cleansedPath, param] = path.split(ID_DELIMITER);

  for (const item of items) {
    const reference = findReference(item, `${currentLocale}${cleansedPath}`);

    if (reference) {
      const resolved = await convertReferenceToPath(reference);

      return param ? `${resolved}#${param}` : resolved;
    }
  }

  throw new Error(`Path could not be resolved`);
};

const findReference = (item: NavigationItem, path: string): string | undefined => {
  const [collection, reference] = item.path.split(PROTOCOL_DELIMITER);
  if (!collection || !reference) throw new Error("Invalid path");

  if (reference === path) {
    return item.path;
  }

  if (item.children) {
    for (const child of item.children) {
      const result = findReference(child, path);
      if (result) return result;
    }
  }
  return undefined;
};

export const generateGetStaticIndexPaths = (routePattern: string) => {
  return async () => {
    const collection = createI18nCollection({ locales: localeSlugs, routePattern, basePath: import.meta.env.BASE_URL });
    return i18nPropsAndParams(collection, {
      ...defaultPropsAndParamsOptions,
      routePattern,
    });
  };
};

export const convertReferenceToPath = async (path: string) => {
  if (!path.includes(PROTOCOL_DELIMITER)) return path;
  if (path.includes(PROTOCOL_DELIMITER) && path.startsWith("http")) return path;

  const [collection, reference] = path.split(PROTOCOL_DELIMITER);
  if (!collection || !reference) throw new Error("Invalid path");

  const collectionName = collection as CollectionKey;
  const entry = await getEntry(collectionName, reference);

  if (!entry) throw new Error(`Entry not found: ${path}`);
  if (!("locale" in entry.data)) throw new Error("Entry has no locale");
  if (!("path" in entry.data)) throw new Error("Entry has no path");
  if (typeof entry.data.path !== "string") throw new Error("Entry title is not a string");

  const localeSlug = entry.data.locale === C.DEFAULT_LOCALE ? undefined : entry.data.locale;
  const contentPath = replaceSegmentsInPath(entry.data.contentPath, parseLocale(entry.data.locale));

  return originalResolvePath(localeSlug, contentPath, entry.data.path);
};

type NavigationItems = DataEntryMap["navigation"]["data"]["data"]["items"];
type NavigationItem = {
  path: string;
  title: string;
  icon?: ImageMetadata;
  children?: NavigationItem[];
};
const processNavigationItems = async (items: NavigationItems): Promise<NavigationItem[]> => {
  return Array.isArray(items)
    ? await Promise.all(
        items.map(async (item) => {
          const { path, children, ...rest } = item;
          const processedChildren = children ? await processNavigationItems(children) : undefined;
          return {
            ...rest,
            children: processedChildren,
            path: await convertReferenceToPath(path),
          };
        }),
      )
    : [];
};

export const prepareNavigation = async <E extends keyof DataEntryMap["navigation"] | (string & {})>(id: E) => {
  const navigation = await getEntry("navigation", id);

  if (!navigation) throw new Error(`Navigation entry not found`);

  return await processNavigationItems(navigation.data.items);
};
