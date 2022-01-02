import { Global, Theme, ThemeProvider } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { DefaultLayoutQuery } from '../../graphql-types';
import { defaultStyles } from '../themes/defaultStyles';
import { defaultTheme } from '../themes/defaultTheme';
import { Document } from './default/Document';
import { Footer } from './default/Footer';
import { Header } from './default/Header';
import { Main } from './default/Main';
import { TwoColorDivider } from './default/TwoColorDivider';

const query = graphql`
  query DefaultLayout {
    site {
      siteMetadata {
        author
        description
        phone
        email
        address
        siteUrl
        title
        version
        project
      }
    }
  }
`;

type DefaultLayoutProps = PropsWithChildren<{
  theme?: Theme;
}>;

export function DefaultLayout({ children, theme }: DefaultLayoutProps) {
  const data = useStaticQuery<DefaultLayoutQuery>(query);

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <Document title={data.site?.siteMetadata?.title || ''} />
      <Global styles={defaultStyles} />
      <Header
        title={data.site?.siteMetadata?.title || ''}
        phone={data.site?.siteMetadata?.phone || ''}
        email={data.site?.siteMetadata?.email || ''}
      />
      <TwoColorDivider />
      <Main>{children}</Main>
      <Footer
        address={data.site?.siteMetadata?.address || ''}
        phone={data.site?.siteMetadata?.phone || ''}
        email={data.site?.siteMetadata?.email || ''}
      />
    </ThemeProvider>
  );
}
