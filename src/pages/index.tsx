import { graphql, PageProps } from 'gatsby';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';
import { CooperationSection } from '../sections/CooperationSection';
import { ExchangeSection } from '../sections/ExchangeSection';
import { ReferencesSection } from '../sections/ReferencesSection';
import { ValuesSection } from '../sections/ValuesSection';

export default function IndexPage({ data }: PageProps<IndexPageQuery, SitePageContext>) {
  return (
    <DefaultLayout>
      <ValuesSection values={data.values} />
      <CooperationSection>Cooperation Section</CooperationSection>
      <ExchangeSection>Exchange Section</ExchangeSection>
      <ReferencesSection>References Section</ReferencesSection>
      <section>FAQ Section</section>
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
        }
      }
    }
  }
`;