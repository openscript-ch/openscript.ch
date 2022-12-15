import { graphql, PageProps } from 'gatsby';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function ImprintPage({ children }: PageProps<SitePageContext>) {
  return (
    <DefaultLayout>
      <section>{children}</section>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ImprintPage($locale: String) {
    content: mdx(fields: { kind: { eq: "sections/imprint" }, locale: { eq: $locale } }) {
      id
    }
  }
`;
