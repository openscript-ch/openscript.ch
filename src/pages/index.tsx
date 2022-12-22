import { graphql, PageProps } from 'gatsby';

import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { CooperationSection } from '../sections/CooperationSection';
import { ExchangeSection } from '../sections/ExchangeSection';
import { QuestionsSection } from '../sections/QuestionsSection';
import { ReferencesSection } from '../sections/ReferencesSection';
import { ValuesSection } from '../sections/ValuesSection';

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <DefaultLayout>
      <ValuesSection values={data.values} />
      <CooperationSection you={data.cooperationYou} us={data.cooperationUs} />
      <ExchangeSection exchange={data.exchange} strengths={data.strengths} />
      <ReferencesSection softwareReferences={data.softwareReferences} companyReferences={data.companyReferences} />
      <QuestionsSection questions={data.questions} />
    </DefaultLayout>
  );
}

export function Head() {
  return <Document title="Home" />;
}

export const query = graphql`
  query IndexPage($locale: String) {
    values: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/values" } } }) {
      nodes {
        html
        frontmatter {
          link
          title
        }
      }
    }
    cooperationYou: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*you*" } }) {
      html
      frontmatter {
        title
      }
    }
    cooperationUs: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*us*" } }) {
      html
      frontmatter {
        title
      }
    }
    exchange: markdownRemark(fields: { kind: { eq: "sections/exchange" }, locale: { eq: $locale } }) {
      html
      frontmatter {
        title
      }
    }
    strengths: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/strength/services" } } }) {
      nodes {
        html
        frontmatter {
          title
          icon {
            publicURL
          }
          skills {
            childMarkdownRemark {
              html
              frontmatter {
                title
                link
              }
            }
          }
        }
      }
    }
    questions: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/questions" } } }) {
      nodes {
        html
        frontmatter {
          answeredBy
          title
        }
      }
    }
    softwareReferences: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/references/software" } } }) {
      nodes {
        html
        frontmatter {
          title
          icon {
            publicURL
          }
        }
      }
    }
    companyReferences: allMarkdownRemark(filter: { fields: { kind: { eq: "sections/references/companies" } } }) {
      nodes {
        html
        frontmatter {
          title
          logo {
            publicURL
          }
          link
        }
      }
    }
  }
`;
