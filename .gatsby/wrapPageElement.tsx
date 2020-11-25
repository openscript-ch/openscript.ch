import React from 'react';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { SitePageContext } from '../graphql-types';
import { IntlProvider } from 'react-intl';
import { contentTranslation, defaultLanguage, Language } from './i18n';

type WrapPageElement = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement'];

export const wrapPageElement: WrapPageElement = ({ element, props }) => {
  const pageContext = props.pageContext as SitePageContext;
  const currentLocale = (pageContext.language ?? defaultLanguage) as Language;
  return (
    <IntlProvider locale={currentLocale} messages={contentTranslation[currentLocale]} defaultLocale={defaultLanguage}>
      {element}
    </IntlProvider>
  );
};
