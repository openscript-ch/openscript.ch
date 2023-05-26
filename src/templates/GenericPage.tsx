import { graphql, HeadProps, PageProps } from 'gatsby';
import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { ContentMain } from '../layouts/default/types/ContentMain';

export default function GenericPage({ children, data }: PageProps<Queries.GenericPagesQuery>) {
  const main = data.mdx?.frontmatter?.type === 'content' ? ContentMain : undefined;
  return (
    <DefaultLayout CustomMain={main}>
      <section>{children}</section>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}

export const query = graphql`
  query GenericPages($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        type
      }
    }
  }
`;
