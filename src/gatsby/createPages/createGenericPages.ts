import { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';
import { AllGenericPagesQuery } from '../../../graphql-types';

export async function CreateGenericPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;
  const allPages = await graphql<AllGenericPagesQuery>(`
    query AllGenericPages {
      allMarkdownRemark(filter: { fields: { kind: { eq: "pages" } } }) {
        edges {
          node {
            id
            fields {
              path
              translations {
                locale
                path
              }
            }
          }
        }
      }
    }
  `);

  allPages.data?.allMarkdownRemark.edges.forEach(p => {
    if (p.node.fields && p.node.fields.path) {
      createPage({
        component: resolve('./src/templates/GenericPage.tsx'),
        context: { id: p.node.id, translations: p.node.fields.translations },
        path: p.node.fields.path,
      });
    }
  });
}
