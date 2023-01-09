import { HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function ParticipationPage() {
  return (
    <DefaultLayout>
      <section>
        <h2>
          <FormattedMessage id="page.future.participation.meta.title" />
        </h2>
      </section>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}
