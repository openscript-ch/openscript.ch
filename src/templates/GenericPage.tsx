import { graphql, PageProps } from 'gatsby';
import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function GenericPage({ children }: PageProps<Queries.AllGenericPagesQuery>) {
  return (
    <DefaultLayout>
      <section>{children}</section>
    </DefaultLayout>
  );
}

export function Head() {
  return <Document />;
}

export const query = graphql`
  query GenericPages($id: String!) {
    mdx(id: { eq: $id }) {
      id
    }
  }
`;
