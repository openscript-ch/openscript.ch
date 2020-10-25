import React from 'react';
import { Helmet } from 'react-helmet';

type PageHeadProps = {
  title: string;
  locale: string;
  alternativeLanguagePaths?: { language: string; path: string }[];
};

export function PageHead({ title, locale, alternativeLanguagePaths }: PageHeadProps) {
  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      {alternativeLanguagePaths?.map((p) => {
        return <link rel="alternate" href={p.path} hrefLang={p.language} key={p.language} />;
      })}
    </Helmet>
  );
}
