import { graphql, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { GenericPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function GenericPage({ data }: PageProps<GenericPageQuery>) {
  return (
    <DefaultLayout>
      <Markup content={data.markdownRemark?.html} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query GenericPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`;
