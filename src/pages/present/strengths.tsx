import { FormattedMessage } from 'react-intl';
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
