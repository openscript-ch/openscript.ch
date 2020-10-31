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
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Prompt:wght@200;400;600&display=swap"
        rel="stylesheet"
      />
      {alternativeLanguagePaths?.map((p) => {
        return <link rel="alternate" href={p.path} hrefLang={p.language} key={p.language} />;
      })}
    </Helmet>
  );
}
