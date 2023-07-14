import { HeadProps, PageProps, graphql } from 'gatsby';
import { Timeline } from 'react-alternating-timeline';
import { Markup } from 'interweave';
import { css } from '@emotion/react';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

const timelineStyles = css`
  .small-image {
    img {
      margin: 1rem 0;
      max-height: 8rem;
      object-fit: contain;
    }
  }
`;

export default function FormationPage({ data }: PageProps<Queries.FormationPageQuery>) {
  return (
    <DefaultLayout>
      <section>
        <Timeline
          css={timelineStyles}
          items={Array.from(data.allMarkdownRemark.nodes)
            .sort((a, b) => a.frontmatter?.date?.localeCompare(b.frontmatter?.date ?? '') ?? 0)
            .map(node => ({
              title: node.frontmatter?.title ?? '',
              date: new Date(node.frontmatter?.date ?? ''),
              key: node.frontmatter?.date ?? '',
              children: <Markup content={node.html} />,
            }))}
          styleConfig={{
            item: {
              gap: '6rem',
              startOffset: {
                right: '6rem',
              },
            },
            pointer: {
              minOffset: '3rem',
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
