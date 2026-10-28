import {
  extendI18nLoaderSchema,
  i18nContentLoader,
  i18nFileLoader,
  i18nLoader,
  i18nReference,
  localized as localizedSchema,
} from 'astro-loader-i18n';
import { defineCollection, type ImageFunction } from 'astro:content';
import { localeSlugs } from './site.config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = <T extends z.ZodType>(schema: T) => localizedSchema(schema, localeSlugs);

const Category: z.ZodType<unknown> = z.object({
  name: z.string(),
  subcategories: z.lazy(() => z.array(Category)),
});

const createNavigationItem = (image: ImageFunction) => {
  const Item = z.object({
    title: z.string(),
    path: z.url().or(z.string()),
    icon: image().optional(),
  });

  return z.object({
    ...Item.shape,
    children: z.array(Item).optional(),
  });
};

const formation = defineCollection({
  loader: i18nContentLoader({ pattern: '**/[^_]*.yaml', base: './src/content/formation' }),
  schema: extendI18nLoaderSchema(
    z.object({
      items: localized(
        z.array(
          z.object({
            title: z.string(),
            text: z.string(),
          }),
        ),
      ),
    }),
  ),
});

const galleries = defineCollection({
  loader: i18nContentLoader({ pattern: '**/[^_]*.yaml', base: './src/content/galleries' }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        items: z.array(
          z.object({
            photo: image(),
            label: localized(z.string()),
          }),
        ),
      }),
    ),
});

const navigation = defineCollection({
  loader: i18nContentLoader({ pattern: '**/[^_]*.yaml', base: './src/content/navigation' }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        items: localized(z.array(createNavigationItem(image))),
      }),
    ),
});

const pages = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: extendI18nLoaderSchema(
    z.object({
      path: z.string(),
      title: z.string(),
      template: z.enum(['article']).optional().default('article'),
    }),
  ),
});

const products = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/products' }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        softwareName: z.string(),
        title: z.string(),
        summary: z.string(),
        logo: image(),
        path: z.url().optional(),
        featured: z.boolean().optional().default(false),
      }),
    ),
});

const questions = defineCollection({
  loader: i18nContentLoader({ pattern: '**/[^_]*.yaml', base: './src/content/questions' }),
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

const referenceCompanies = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/references/companies' }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        id: z.string(),
        companyName: z.string(),
        logo: image(),
        url: z.url().optional(),
        archived: z.boolean().optional().default(false),
        details: z.string().optional(),
      }),
    ),
});

const referenceProjects = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/references/projects' }),
  schema: ({ image }) =>
    extendI18nLoaderSchema(
      z.object({
        softwareName: z.string(),
        title: z.string(),
        summary: z.string(),
        logo: image(),
        path: z.url().optional(),
        featured: z.boolean().optional().default(false),
        company: i18nReference('referenceCompanies'),
      }),
    ),
});

const sections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/sections' }),
  schema: z.object({}),
});

const services = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/services' }),
  schema: extendI18nLoaderSchema(
    z.object({
      serviceName: z.string(),
      sprite: z.string(),
    }),
  ),
});

const strengths = defineCollection({
  loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/strengths' }),
  schema: extendI18nLoaderSchema(
    z.object({
      strengthName: z.string(),
      sprite: z.string(),
      service: i18nReference('services'),
    }),
  ),
});

const team = defineCollection({
  loader: i18nFileLoader('./src/content/team/index.yaml'),
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

const technologies = defineCollection({
  loader: i18nFileLoader('./src/content/technologies/index.yaml'),
  schema: extendI18nLoaderSchema(
    z.object({
      id: z.string(),
      label: localized(z.string()),
      logo: z.string(),
      url: z.url(),
    }),
  ),
});

export const collections = {
  formation,
  galleries,
  navigation,
  pages,
  products,
  questions,
  referenceCompanies,
  referenceProjects,
  sections,
  services,
  strengths,
  team,
  technologies,
};
