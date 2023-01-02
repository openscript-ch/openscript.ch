import { FormattedMessage } from 'react-intl';
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
