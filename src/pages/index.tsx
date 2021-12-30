import { graphql, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function IndexPage({ data }: PageProps<IndexPageQuery, SitePageContext>) {
  return (
    <DefaultLayout>
      <Markup content={data.slogans?.html} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($locale: String) {
    slogans: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*slogan*" } }) {
      html
    }
  }
`;
