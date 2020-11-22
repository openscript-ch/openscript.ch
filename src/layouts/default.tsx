import { css, Global } from '@emotion/core';
import { graphql, StaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { BuildInfo } from '../components/BuildInfo';
import { ContactBar } from '../components/ContactBar';
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
    --heading-font: 'Prompt', 'Roboto', sans-serif;
    --paragraph-font: 'PT Sans', 'Roboto', sans-serif;
    --code-font: 'IBM Plex Mono', monospace;
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
    font-family: var(--paragraph-font);
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
      box-sizing: border-box;
      width: 100vw;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--heading-font);
    font-weight: 400;
  }

  pre,
  code,
  samp,
  kbd {
    font-family: var(--code-font);
  }
`;

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext; title: string }>;

export function DefaultLayout({ pageContext, title, children }: DefaultLayoutProps) {
  const intl = useIntl();
  const siteTitle = intl.formatMessage({ id: 'meta.title' });
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayout {
          site {
            buildTime
            siteMetadata {
              phone
              email
            }
          }
        }
      `}
      render={(data: DefaultLayoutQuery) => (
        <div id="wrapper">
          <PageHead
            alternativeLanguagePaths={pageContext.alternativeLanguagePaths}
            locale={pageContext.language}
            title={`${title} - ${siteTitle}`}
          />
          <Global styles={DefaultLayoutStyle} />
          <DefaultHeader
            contactBar={<ContactBar phone={data.site.siteMetadata.phone} email={data.site.siteMetadata.email} />}
            languageSwitcher={<LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />}
            logo={<Logo homePath={`/${pageContext.language !== 'de' ? `${pageContext.language}/` : ''}`} />}
            siteTitle={siteTitle}
          />
          <main>{children}</main>
          <DefaultFooter buildInfo={<BuildInfo buildDateTime={data.site.buildTime} />} />
        </div>
      )}
    />
  );
}
