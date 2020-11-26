import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { SitePageContext, IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { graphql } from 'gatsby';
import { Ticker } from '../components/Ticker';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Reference = styled.div`
  margin-left: 2rem;
  filter: grayscale();

  &:hover {
    filter: none;
  }
`;

const ReferenceTicker = styled(Ticker)`
  position: relative;

  &:after {
    content: '';
    background: linear-gradient(to right, var(--white-color) 0, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 75%, var(--white-color) 100%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }
`;

type IndexPageProps = { data: IndexPageQuery; pageContext: SitePageContext };

export default function IndexPage({ data, pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });
  const references = data.references.nodes.map((value, index) => (
    <Reference key={index}>
      <Img fixed={{ ...value.frontmatter.logo.childImageSharp.fixed }} />
    </Reference>
  ));

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <h2>
        <FormattedMessage id="page.index.section.values" />
      </h2>
      {data.values.nodes.map((value, index) => {
        return <div key={index} dangerouslySetInnerHTML={{ __html: value.html }} />;
      })}
      <h2>
        <FormattedMessage id="page.index.section.references" />
      </h2>
      <ReferenceTicker slides={references} speed={-0.04} />
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
    references: allMarkdownRemark(filter: { fields: { language: { eq: $language }, kind: { eq: "references" } } }) {
      nodes {
        frontmatter {
          title
          logo {
            childImageSharp {
              fixed(height: 48) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          website
        }
      }
    }
  }
`;
