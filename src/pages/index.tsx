import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext, IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { ValueSection } from '../components/ValueSection';
import { graphql } from 'gatsby';

type IndexPageProps = { data: IndexPageQuery; pageContext: SitePageContext };

export default function IndexPage({ data, pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      {data.values.nodes.map((value) => {
        return <div dangerouslySetInnerHTML={{ __html: value.html }} />;
      })}
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($language: String) {
    values: allMarkdownRemark(
      filter: { fields: { language: { eq: $language }, kind: { eq: "values" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        fileAbsolutePath
        fields {
          language
          kind
        }
        html
      }
    }
  }
`;
