import { graphql, HeadProps, PageProps } from 'gatsby';
import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function GenericPage({ children }: PageProps<Queries.AllGenericPagesQuery>) {
  return (
    <DefaultLayout>
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
    }
  }
`;
