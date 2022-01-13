import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from '../../plugins/gatsby-plugin-i18n-l10n';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function NotFound() {
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
