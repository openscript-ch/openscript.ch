import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { graphql, HeadProps } from 'gatsby';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Document } from '../layouts/default/Document';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.not-found.title" />
        </h2>
        <FormattedMessage id="page.not-found.content" tagName="p" />
        <LocalizedLink to="/">
          <FormattedMessage id="page.not-found.action" />
        </LocalizedLink>
      </section>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.not-found.title`)
export function Head({ data }: HeadProps<Queries.NotFoundPageQuery>) {
  return <Document title={data.pageTitle?.message} />;
}

export const query = graphql`
  query NotFoundPage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.not-found.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.not-found.description" }) {
      message
    }
  }
`;
