import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function FormationPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.formation.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.past.formation.title`)
// PageDescription: t(`page.past.formation.description`)
export function Head({ data }: HeadProps<Queries.PastFormationPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query PastFormationPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.past.formation.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.past.formation.description" }) {
      message
    }
  }
`;
