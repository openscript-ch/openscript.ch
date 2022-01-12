import { graphql, PageProps } from 'gatsby';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';
import { CooperationSection } from '../sections/CooperationSection';
import { ExchangeSection } from '../sections/ExchangeSection';
import { ReferencesSection } from '../sections/ReferencesSection';
import { ValuesSection } from '../sections/ValuesSection';
import { QuestionsSection } from '../sections/QuestionsSection';

export default function IndexPage({ data }: PageProps<IndexPageQuery, SitePageContext>) {
  return (
    <DefaultLayout>
      <ValuesSection values={data.values} />
      <CooperationSection you={data.cooperationYou} us={data.cooperationUs} />
      <ExchangeSection exchange={data.exchange} />
      <ReferencesSection softwareReferences={data.softwareReferences} companyReferences={data.companyReferences} />
      <QuestionsSection questions={data.questions} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($locale: String) {
    values: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/values" } } }) {
      nodes {
        html
        frontmatter {
          title
          link
        }
      }
    }
    cooperationYou: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*you*" } }) {
      frontmatter {
        title
      }
      html
    }
    cooperationUs: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*us*" } }) {
      frontmatter {
        title
      }
      html
    }
    exchange: markdownRemark(fields: { kind: { eq: "sections/exchange" }, locale: { eq: $locale } }) {
      html
      frontmatter {
        title
      }
    }
    questions: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/questions" } } }) {
      nodes {
        html
        frontmatter {
          title
          answeredBy
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
        frontmatter {
          title
          logo {
            publicURL
          }
          link
        }
        html
      }
    }
  }
`;
