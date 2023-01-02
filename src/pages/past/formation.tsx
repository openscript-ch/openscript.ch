import { FormattedMessage } from 'react-intl';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function FormationPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.formation.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}
