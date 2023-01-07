import { graphql, HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function TeamPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.team.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.present.team.title`)
// PageDescription: t(`page.present.team.description`)
export function Head({ data }: HeadProps<Queries.PresentTeamPageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query PresentTeamPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.present.team.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.present.team.description" }) {
      message
    }
  }
`;
