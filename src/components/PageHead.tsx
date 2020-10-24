import React from 'react';
import { Helmet } from 'react-helmet';

type PageHeadProps = {
  title: string;
  locale: string;
};

export function PageHead({ title, locale }: PageHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
