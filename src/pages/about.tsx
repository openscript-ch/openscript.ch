import React from 'react';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';

type AboutPageProps = { pageContext: SitePageContext };

export default function AboutPage({ pageContext }: AboutPageProps) {
  return <DefaultLayout pageContext={pageContext}>About</DefaultLayout>;
}
