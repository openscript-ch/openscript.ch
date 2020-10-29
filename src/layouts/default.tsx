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
  :root {
    --white-color: #ede9df;
    --white-alternate-color: #dbd4c3;
    --black-color: #231f20;
    --primary-color: #539350;
    --primary-alternate-color: #7ad975;
    --secondary-color: #fa5100;
  }

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
    background: var(--white-color);
    color: var(--black-color);
  }

  #___gatsby,
  #___gatsby > * {
    display: flex;
    flex-grow: 1;
  }

  #wrapper {
    width: 100%;
    display: grid;
    grid-template-rows: 5rem auto 7rem;
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';

    & > * {
      padding: 0 15%;
    }

    @media screen and (max-width: 60rem) {
      & > * {
        padding: 0 2rem;
      }
    }
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

  a {
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--secondary-color);
    }
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
