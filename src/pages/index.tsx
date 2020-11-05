import React from 'react';
import { useIntl } from 'react-intl';
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
    background: linear-gradient(
      to right,
      var(--white-color) 0,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 75%,
      var(--white-color) 100%
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

type IndexPageProps = { data: IndexPageQuery; pageContext: SitePageContext };

export default function IndexPage({ data, pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });
  let references = data.references.nodes.map((value, index) => (
    <Reference key={index}>
      <Img fixed={value.frontmatter.logo.childImageSharp.fixed} />
    </Reference>
  ));
  references = [...references, ...references, ...references, ...references, ...references, ...references, ...references];

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      {data.values.nodes.map((value, index) => {
        return <div key={index} dangerouslySetInnerHTML={{ __html: value.html }} />;
      })}
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
              fixed(height: 64) {
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
