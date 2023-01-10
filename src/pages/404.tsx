import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { HeadProps } from 'gatsby';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Document } from '../layouts/default/Document';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.404.meta.title" />
        </h2>
        <FormattedMessage id="page.not-found.content" tagName="p" />
        <LocalizedLink to="/">
          <FormattedMessage id="page.not-found.action" />
        </LocalizedLink>
      </section>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}
