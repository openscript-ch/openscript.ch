import path from 'path';
import { GatsbyConfig } from 'gatsby';
import deCHMessages from './content/i18n/de-CH.json';
import enUSMessages from './content/i18n/en-US.json';
import packageJson from './package.json';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.SITE_URL || `https://example.com`;

const remarkPlugins = [
  'gatsby-remark-copy-linked-files',
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1140,
      quality: 90,
      linkImagesToOriginal: false,
    },
  },
  'gatsby-remark-autolink-headers',
];

const configuration: GatsbyConfig = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  flags: {
    // DEV_SSR: true, // enables server side rendering in development
  },
  siteMetadata: {
    title: `openscript GmbH`,
    description: `Companions for adventures in the world of bits and bytes.`,
    author: `openscript GmbH`,
    phone: `<a href="tel:+41445205467">+41 44 520 54 67</a>`,
    email: `<a href="mailto:hi@openscript.ch">hi@openscript.ch</a>`,
    address: `<a href="https://www.openstreetmap.org/node/9428042241"><ul><li><strong>openscript GmbH</strong></li><li>Europastrasse 30</li><li>8152 Glattbrugg</li></ul></a>`,
    siteUrl,
    version: packageJson.version,
    project: packageJson.name,
  },
  graphqlTypegen: {
    typesOutputPath: 'graphql-types.ts',
    documentSearchPaths: [`./gatsby-node.ts`, `./plugins/**/gatsby-node.ts`, `./src/**/*.ts?(x)`],
    generateOnBuild: true,
  },
  plugins: [
    // Sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(`content/data`),
      },
    },

    // Transformers
    `gatsby-transformer-sharp`,

    // Plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`],
        gatsbyRemarkPlugins: remarkPlugins,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: remarkPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-i18n-l10n`,
      options: {
        defaultLocale: `de-CH`,
        siteUrl,
        locales: [
          {
            locale: `en-US`,
            prefix: `en`,
            slugs: {},
            messages: enUSMessages,
          },
          {
            locale: `de-CH`,
            prefix: `de`,
            slugs: {
              '/past': '/vergangenheit',
              '/past/formation': '/vergangenheit/entstehung',
              '/past/references': '/vergangenheit/referenzen',
              '/present': '/gegenwart',
              '/present/strengths': '/gegenwart/staerken',
              '/present/values': '/gegenwart/werte',
              '/present/team': '/gegenwart/team',
              '/future': '/zukunft',
              '/future/services': '/zukunft/dienstleistungen',
              '/future/collaboration': '/zukunft/zusammenarbeit',
              '/future/participation': '/zukunft/mitarbeit',
              '/imprint': '/impressum',
            },
            messages: deCHMessages,
          },
        ],
        pathBlacklist: ['/pages'],
      },
    },
  ],
};

export default configuration;
