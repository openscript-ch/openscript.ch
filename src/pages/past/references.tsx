import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function ReferencesPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.references.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.past.references.title`)
// PageDescription: t(`page.past.references.description`)
export function Head({ data }: HeadProps<Queries.PastReferencesPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query PastReferencesPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.past.references.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.past.references.description" }) {
      message
    }
  }
`;
