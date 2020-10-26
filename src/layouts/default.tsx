import { css, Global } from '@emotion/core';
import { graphql, StaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { BuildInfo } from '../components/BuildInfo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Logo } from '../components/Logo';
import { PageHead } from '../components/PageHead';
import { DefaultFooter } from './default/Footer';
import { DefaultHeader } from './default/Header';

const DefaultLayoutStyle = css`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-size: 14pt;
    min-height: 100%;
    scroll-behavior: smooth;
    display: flex;
    min-height: 100%;
    background: linear-gradient(to bottom, #ddd, #fff 20rem);
  }

  #___gatsby,
  #___gatsby > * {
    display: flex;
    flex-grow: 1;
  }

  #wrapper {
    width: 100%;
    display: grid;
    grid-template-rows: 5rem auto 2rem;
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext; title: string }>;

export function DefaultLayout({ pageContext, title, children }: DefaultLayoutProps) {
  const intl = useIntl();
  const titleSuffix = intl.formatMessage({ id: 'meta.title' });
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayout {
          site {
            buildTime
          }
        }
      `}
      render={(data: DefaultLayoutQuery) => (
        <div id="wrapper">
          <PageHead
            alternativeLanguagePaths={pageContext.alternativeLanguagePaths}
            locale={pageContext.language}
            title={`${title} - ${titleSuffix}`}
          />
          <Global styles={DefaultLayoutStyle} />
          <DefaultHeader
            languageSwitcher={<LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />}
            logo={<Logo homePath={`/`} />}
          />
          <main>{children}</main>
          <DefaultFooter buildInfo={<BuildInfo buildDateTime={data.site.buildTime} />} />
        </div>
      )}
    />
  );
}
