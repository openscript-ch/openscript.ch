import { graphql, PageProps } from 'gatsby';

import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function IndexPage({ children }: PageProps) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export function Head() {
  return <Document title="Home" />;
}

export const query = graphql`
  query IndexPage($locale: String) {
    values: allMdx(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/values" } } }) {
      nodes {
        body
        frontmatter {
          link
          title
        }
      }
    }
    cooperationYou: mdx(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*you*" } }) {
      body
      frontmatter {
        title
      }
    }
    cooperationUs: mdx(fields: { locale: { eq: $locale }, kind: { eq: "sections/cooperation" }, filename: { glob: "*us*" } }) {
      body
      frontmatter {
        title
      }
    }
    exchange: mdx(fields: { kind: { eq: "sections/exchange" }, locale: { eq: $locale } }) {
      body
      frontmatter {
        title
      }
    }
    questions: allMdx(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/questions" } } }) {
      nodes {
        body
        frontmatter {
          answeredBy
          title
        }
      }
    }
    softwareReferences: allMdx(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/references/software" } } }) {
      nodes {
        body
        frontmatter {
          title
          icon {
            publicURL
          }
        }
      }
    }
    companyReferences: allMdx(filter: { fields: { kind: { eq: "sections/references/companies" } } }) {
      nodes {
        body
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
