import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function CollaborationPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.collaboration.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.future.collaboration.title`)
// PageDescription: t(`page.future.collaboration.description`)
export function Head({ data }: HeadProps<Queries.FutureCollaborationPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query FutureCollaborationPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.future.collaboration.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.future.collaboration.description" }) {
      message
    }
  }
`;
