import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function StrengthsPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.strengths.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.present.strengths.title`)
// PageDescription: t(`page.present.strengths.description`)
export function Head({ data }: HeadProps<Queries.PresentStrengthsPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query PresentStrengthsPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.present.strengths.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.present.strengths.description" }) {
      message
    }
  }
`;
