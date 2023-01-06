import { graphql, PageProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { StrengthsDetailSection } from '../../sections/StrengthsDetailSection';

export default function StrengthsPage({ data }: PageProps<Queries.StrengthsPageQuery>) {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.strengths.title" />
        </h2>
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
