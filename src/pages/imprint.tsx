import { graphql, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { ImprintPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function ImprintPage({ data }: PageProps<ImprintPageQuery, SitePageContext>) {
  return (
    <DefaultLayout>
      <section>
        <Markup content={data.content?.html} />
      </section>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ImprintPage($locale: String) {
    content: markdownRemark(fields: { kind: { eq: "sections/imprint" }, locale: { eq: $locale } }) {
      html
    }
  }
`;
