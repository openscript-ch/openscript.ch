import { css, Global } from '@emotion/core';
import { graphql, StaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { BuildInfo } from '../components/BuildInfo';
import { NavigationBar } from '../components/NavigationBar';
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
    --black-alternate-color: #2c2a2a;
    --primary-color: #539350;
    --primary-alternate-color: #7ad975;
    --secondary-color: #fa5100;
    --heading-font: 'Prompt', 'Roboto', sans-serif;
    --paragraph-font: 'PT Sans', 'Roboto', sans-serif;
    --code-font: 'IBM Plex Mono', monospace;
  }

  html {
    height: 100%;
    font-size: 18px;
  }

  @media (max-width: 60rem) {
    html {
      font-size: 12pt;
    }
  }

  @media (max-width: 30rem) {
    html {
      font-size: 11pt;
    }
  }

  body {
    margin: 0;
    min-height: 100%;
    scroll-behavior: smooth;
    display: flex;
    min-height: 100%;
    background: var(--white-alternate-color);
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
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 5rem auto 7rem;
    grid-template-areas:
      'header'
      'main'
      'footer';

    & > * {
      box-sizing: border-box;
      max-width: 100%;
    }

    & > *:not(main),
    & > main > section {
      padding: 0 20%;

      @media (max-width: 100rem) {
        padding: 0 15%;
      }

      @media (max-width: 60rem) {
        padding: 0 2rem;
      }

      @media (max-width: 20rem) {
        padding: 0 1rem;
      }
    }

    & > main > section {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  header {
    grid-area: header;
    position: relative;

    nav {
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 1rem;
    }
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
    margin-top: 0;
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
            navigationBar={
              <NavigationBar
                phone={data.site.siteMetadata.phone}
                email={data.site.siteMetadata.email}
                language={<LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />}
                collapseWidth="45rem"
              />
            }
            logo={<Logo homePath={'/'} />}
            siteTitle={siteTitle}
          />
          <main>{children}</main>
          <DefaultFooter buildInfo={<BuildInfo buildDateTime={data.site.buildTime} />} />
        </div>
      )}
    />
  );
}
