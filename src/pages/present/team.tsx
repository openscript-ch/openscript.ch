import { FormattedMessage } from 'react-intl';
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
