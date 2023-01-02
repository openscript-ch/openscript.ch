import { FormattedMessage } from 'react-intl';
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
