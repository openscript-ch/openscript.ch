import {
  extendI18nLoaderSchema,
  i18nContentLoader,
  i18nFileLoader,
  i18nLoader,
  localized as localizedSchema,
} from "astro-loader-i18n";
import { defineCollection, z, type ImageFunction } from "astro:content";
import { localeSlugs } from "./site.config";
import { glob, file } from "astro/loaders";

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
  loader: i18nContentLoader({ pattern: "**/[^_]*.yaml", base: "./src/content/navigation" }),
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

const sectionsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/sections" }),
  schema: z.object({}),
});

const referenceCompaniesCollection = defineCollection({
  loader: file("./src/content/references/companies/index.yaml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      companyName: z.string(),
      logo: image(),
      url: z.string().url().optional(),
      archived: z.boolean().optional().default(false),
    }),
});

const referenceProjectsCollection = defineCollection({
  loader: i18nLoader({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/references/projects" }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        softwareName: z.string(),
        title: z.string(),
        summary: z.string(),
        logo: image(),
        path: z.string().url().optional(),
      }),
    ),
});

const questionsCollection = defineCollection({
  loader: i18nContentLoader({ pattern: "**/[^_]*.yaml", base: "./src/content/questions" }),
  schema: extendI18nLoaderSchema(
    z.object({
      author: z.string(),
      items: localized(
        z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        ),
      ),
    }),
  ),
});

const teamCollection = defineCollection({
  loader: i18nFileLoader("./src/content/team/index.yaml"),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        id: z.string(),
        name: z.string(),
        avatar: image(),
        role: localized(z.string()),
      }),
    ),
});

export const collections = {
  navigation: navigationCollection,
  pages: pagesCollection,
  sections: sectionsCollection,
  referenceCompanies: referenceCompaniesCollection,
  referenceProjects: referenceProjectsCollection,
  questions: questionsCollection,
  team: teamCollection,
};
