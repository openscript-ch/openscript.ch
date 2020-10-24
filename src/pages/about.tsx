import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';

type AboutPageProps = { pageContext: SitePageContext };

export default function AboutPage({ pageContext }: AboutPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.about.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      About
    </DefaultLayout>
  );
}
