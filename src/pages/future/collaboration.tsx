import { HeadProps } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function CollaborationPage() {
  return (
    <DefaultLayout>
      <section>
        <h1>
          <FormattedMessage id="page.future.collaboration.meta.title" />
        </h1>
      </section>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}
