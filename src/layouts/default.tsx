import { graphql, StaticQuery } from 'gatsby';
import React, { Fragment, PropsWithChildren } from 'react';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext }>;

export function DefaultLayout({ pageContext, children }: DefaultLayoutProps) {
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayout {
          sitePage {
            context {
              language
              alternativeLanguagePaths {
                language
                path
              }
            }
          }
        }
      `}
      render={(data: DefaultLayoutQuery) => (
        <Fragment>
          <LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />
          <main>{children}</main>
        </Fragment>
      )}
    />
  );
}
