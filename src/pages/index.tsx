import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';

type IndexPageProps = { pageContext: SitePageContext };

export default function IndexPage({ pageContext }: IndexPageProps) {
  return (
    <DefaultLayout pageContext={pageContext}>
      <FormattedMessage id="meta.hello" />
    </DefaultLayout>
  );
}
