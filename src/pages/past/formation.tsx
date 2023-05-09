import { HeadProps, PageProps, graphql } from 'gatsby';
import { Timeline } from 'react-alternating-timeline';
import { Markup } from 'interweave';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function FormationPage({ data }: PageProps<Queries.FormationPageQuery>) {
  return (
    <DefaultLayout>
      <section>
        <Timeline
          items={Array.from(data.allMarkdownRemark.nodes)
            .sort((a, b) => a.frontmatter?.date?.localeCompare(b.frontmatter?.date ?? '') ?? 0)
            .map(node => ({
              title: node.frontmatter?.title ?? '',
              date: new Date(node.frontmatter?.date ?? ''),
              key: node.frontmatter?.date ?? '',
              children: <Markup content={node.html} />,
            }))}
          styleConfig={{
            gap: '6rem',
            offset: {
              right: '6rem',
            },
            pointer: {
              offset: '3rem',
            },
          }}
        />
      </section>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}

export const query = graphql`
  query FormationPage($locale: String) {
    allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/events" } } }) {
      nodes {
        html
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
