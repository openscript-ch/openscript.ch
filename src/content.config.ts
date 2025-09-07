import { extendI18nLoaderSchema, i18nContentLoader, i18nLoader, localized as localizedSchema } from "astro-loader-i18n";
import { defineCollection, z, type ImageFunction } from "astro:content";
import { localeSlugs } from "./site.config";

const localized = <T extends z.ZodTypeAny>(schema: T) => localizedSchema(schema, localeSlugs);

const Category: z.ZodType<unknown> = z.object({
  name: z.string(),
  subcategories: z.lazy(() => z.array(Category)),
});

const createNavigationItem = (image: ImageFunction) => {
  const Item = z.object({
    title: z.string(),
    path: z.string().url().or(z.string()),
    icon: image().optional(),
  });

  return z.object({
    ...Item.shape,
    children: z.array(Item).optional(),
  });
};

const navigationCollection = defineCollection({
  loader: i18nContentLoader({ pattern: "**/[^_]*.yml", base: "./src/content/navigation" }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        items: localized(z.array(createNavigationItem(image))),
      }),
    ),
});

const pagesCollection = defineCollection({
  loader: i18nLoader({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: extendI18nLoaderSchema(
    z.object({
      path: z.string(),
      title: z.string(),
      template: z.enum(["article"]).optional().default("article"),
    }),
  ),
});

export const collections = {
  navigation: navigationCollection,
  pages: pagesCollection,
};
