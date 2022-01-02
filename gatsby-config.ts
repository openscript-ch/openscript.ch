import { withMetaConfig } from 'gatsby-ts';
import deCHMessages from './content/i18n/de-CH.json';
import enUSMessages from './content/i18n/en-US.json';
import packageJson from './package.json';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const configuration = withMetaConfig(({ projectRoot }) => {
  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    siteMetadata: {
      title: `openscript GmbH`,
      description: `This is a quite opinionated Gatsby starter.`,
      phone: `<a href="tel:+41445205467">+41 44 520 54 67</a>`,
      email: `<a href="mailto:hi@openscript.ch">hi@openscript.ch</a>`,
      address: `<a href="https://www.openstreetmap.org/way/43938793"><ul><li><strong>openscript GmbH</strong></li><li>Europa-Strasse 30</li><li>8153 Glattbrugg</li></ul></a>`,
      author: `openscript GmbH`,
      siteUrl: process.env.SITE_URL || `https://example.com`,
      version: packageJson.version,
      project: packageJson.name,
    },
    plugins: [
      // Sources
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${projectRoot}/content/data`,
        },
      },

      // Transformers
      `gatsby-transformer-sharp`,
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
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
          ],
        },
      },

      // Plugins
      `gatsby-plugin-svgr`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
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
          icon: `content/statics/icon.png`, // This path is relative to the root of the site.
        },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,

      // Local plugins
      {
        resolve: `gatsby-plugin-i18n-l10n`,
        options: {
          defaultLocale: `en-US`,
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
              slugs: {},
              messages: deCHMessages,
            },
          ],
        },
      },
    ],
  };
});

export default configuration;
