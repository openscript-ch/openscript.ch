import { ITSConfigFn } from 'gatsby-plugin-ts-config';

const configuration: ITSConfigFn<'config'> = ({ projectRoot }) => ({
  siteMetadata: {
    title: 'openscript GmbH',
  },
  plugins: [
    // Plugins
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `openscript GmbH`,
        short_name: `openscript GmbH`,
        start_url: `/`,
        background_color: `#6A4A3C`,
        theme_color: `#EB6841`,
        display: `standalone`,
        icon: `static/favicon.ico`
      }
    },

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${projectRoot}/content`
      }
    },

    // Transformers
    'gatsby-transformer-sharp',
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
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
});

export default configuration;
