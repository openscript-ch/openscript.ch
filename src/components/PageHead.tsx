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
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;700&family=Roboto&display=swap" rel="stylesheet" />
      {alternativeLanguagePaths?.map((p) => {
        return <link rel="alternate" href={p.path} hrefLang={p.language} key={p.language} />;
      })}
    </Helmet>
  );
}
