import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function ValuesPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.values.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.present.values.title`)
// PageDescription: t(`page.present.values.description`)
export function Head({ data }: HeadProps<Queries.PresentValuesPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query PresentValuesPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.present.values.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.present.values.description" }) {
      message
    }
  }
`;
