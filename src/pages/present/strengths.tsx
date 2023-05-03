import { graphql, PageProps, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { StrengthsDetailSection } from '../../sections/StrengthsDetailSection';

export default function StrengthsPage({ data }: PageProps<Queries.StrengthsPageQuery>) {
  return (
    <DefaultLayout>
      <section>
        <h1>
          <FormattedMessage id="page.present.strengths.meta.title" />
        </h1>
      </section>
      {data.strengths.nodes.map((strength, index) => (
        <StrengthsDetailSection strength={strength} index={index} />
      ))}
    </DefaultLayout>
  );
}

export const query = graphql`
  query StrengthsPage($locale: String) {
    strengths: allMarkdownRemark(
      filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/strengths/services" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        html
        frontmatter {
          title
          order
          sprite
          skills {
            childMarkdownRemark {
              html
              frontmatter {
                title
                link
                sprite
              }
            }
          }
        }
      }
    }
  }
`;
export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}
