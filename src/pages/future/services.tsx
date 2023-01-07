import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function ServicesPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.services.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.future.services.title`)
// PageDescription: t(`page.future.services.description`)
export function Head({ data }: HeadProps<Queries.FutureServicesPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query FutureServicesPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.future.services.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.future.services.description" }) {
      message
    }
  }
`;
