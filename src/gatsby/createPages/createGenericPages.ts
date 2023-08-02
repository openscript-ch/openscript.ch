import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

const genericPageTemplate = resolve('./src/templates/GenericPage.tsx');

export async function CreateGenericPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;
  const allPages = await graphql<Queries.AllGenericPagesQuery>(`
    query AllGenericPages {
      allMdx(filter: { fields: { kind: { glob: "pages/**" } } }) {
        edges {
          node {
            id
            frontmatter {
              description
              title
            }
            fields {
              path
              translations {
                locale
                path
              }
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  allPages.data?.allMdx.edges.forEach(p => {
    if (p.node.fields && p.node.fields.path) {
      createPage({
        component: `${genericPageTemplate}?__contentFilePath=${p.node.internal.contentFilePath}`,
        context: { id: p.node.id, translations: p.node.fields.translations, metaData: p.node.frontmatter },
        path: p.node.fields.path,
      });
    }
  });
}
