import { ITSConfigFn } from 'gatsby-plugin-ts-config';

const configuration: ITSConfigFn<'config'> = ({ projectRoot }) => ({
  pathPrefix: '/openscript.ch', // TODO: Remove when it runs at the domains root
  siteMetadata: {
    siteUrl: 'https://openscript.ch',
    topNavigation: ['/about']
  },
  plugins: [
    // Plugins
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'openscript GmbH',
        short_name: 'openscript GmbH',
        start_url: '/',
        background_color: '#539350',
        theme_color: '#ede9df',
        display: 'standalone',
        icon: 'static/favicons/favicon.png',
        icons: [
          {
            src: 'static/favicons/favicon192.png',
            sizes: '192x192',
            type: 'image/png'
          }, {
            src: 'static/favicons/favicon512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
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
