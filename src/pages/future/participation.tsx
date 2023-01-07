import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function ParticipationPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.participation.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.future.participation.title`)
// PageDescription: t(`page.future.participation.description`)
export function Head({ data }: HeadProps<Queries.FutureParticipationPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query FutureParticipationPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.future.participation.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.future.participation.description" }) {
      message
    }
  }
`;
