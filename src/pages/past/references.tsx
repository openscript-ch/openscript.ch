import { FormattedMessage } from 'react-intl';
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
