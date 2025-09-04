import { extendI18nLoaderSchema, i18nContentLoader, i18nLoader, localized as localizedSchema } from "astro-loader-i18n";
import { defineCollection, z } from "astro:content";
import { localeSlugs } from "./site.config";

const localized = <T extends z.ZodTypeAny>(schema: T) => localizedSchema(schema, localeSlugs);

const navigationCollection = defineCollection({
  loader: i18nContentLoader({ pattern: "**/[^_]*.yml", base: "./src/content/navigation" }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        items: localized(
          z.array(
            z.object({
              title: z.string(),
              path: z.string().url().or(z.string()),
              icon: image().optional(),
            }),
          ),
        ),
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
