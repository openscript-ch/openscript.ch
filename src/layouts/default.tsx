import { css, Global } from '@emotion/core';
import { graphql, StaticQuery } from 'gatsby';
import React, { Fragment, PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { PageHead } from '../components/PageHead';
import { DefaultFooter } from './default/Footer';
import { DefaultHeader } from './default/Header';

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext; title: string }>;

const DefaultLayoutStyle = css`
  body {
    margin: 0;
  }
`;

export function DefaultLayout({ pageContext, title, children }: DefaultLayoutProps) {
  const intl = useIntl();
  const titleSuffix = intl.formatMessage({ id: 'meta.title' });
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayout {
          siteBuildMetadata {
            buildTime
          }
        }
      `}
      render={(data: DefaultLayoutQuery) => (
        <Fragment>
          <PageHead
            alternativeLanguagePaths={pageContext.alternativeLanguagePaths}
            locale={pageContext.language}
            title={`${title} - ${titleSuffix}`}
          />
          <Global styles={DefaultLayoutStyle} />
          <DefaultHeader />
          <LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />
          <main>{children}</main>
          <DefaultFooter />
        </Fragment>
      )}
    />
  );
}
