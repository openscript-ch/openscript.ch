import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { SitePageContext, IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { graphql } from 'gatsby';
import { Ticker } from '../components/Ticker';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Offers } from '../layouts/default/sections/Offers';
import { ReactComponent as Checkmark } from '../../static/checkmark.svg';

const Reference = styled.div`
  margin-left: 2rem;
  filter: grayscale();

  &:hover {
    filter: none;
  }
`;

const ValuesSections = styled.section`
  min-height: 60vh;
  padding: 5vh;
  box-sizing: border-box;

  h2 {
    font-size: 2rem;
    margin: 0.5em 0;
    display: flex;
    align-items: center;

    svg {
      max-height: 0.8em;
      margin-right: 0.6em;
    }
  }
`;

const ReferenceTicker = styled(Ticker)`
  position: relative;

  @media (min-width: 30rem) {
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
      <ValuesSections>
        {data.values.nodes.map((value, index) => {
          return (
            <h2 key={index}>
              <Checkmark></Checkmark>
              <div dangerouslySetInnerHTML={{ __html: value.frontmatter.title }} />
            </h2>
          );
        })}
      </ValuesSections>
      <Offers />
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
        frontmatter {
          title
          illustration
        }
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
