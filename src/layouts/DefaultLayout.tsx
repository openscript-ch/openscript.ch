import { Global, Theme, ThemeProvider } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { ComponentType, PropsWithChildren } from 'react';
import { TwoColorDivider } from '../components/TwoColorDivider';
import { defaultStyles } from '../themes/defaultStyles';
import { defaultTheme } from '../themes/defaultTheme';
import { Footer } from './default/Footer';
import { Header } from './default/Header';
import { Main } from './default/Main';

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
  CustomMain?: ComponentType<PropsWithChildren>;
}>;

export function DefaultLayout({ children, theme, CustomMain = Main }: DefaultLayoutProps) {
  const data = useStaticQuery<Queries.DefaultLayoutQuery>(query);

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <Global styles={defaultStyles} />
      <Header
        title={data.site?.siteMetadata?.title || ''}
        phone={data.site?.siteMetadata?.phone || ''}
        email={data.site?.siteMetadata?.email || ''}
      />
      <TwoColorDivider />
      <CustomMain>{children}</CustomMain>
      <TwoColorDivider flipVertical />
      <Footer
        address={data.site?.siteMetadata?.address || ''}
        phone={data.site?.siteMetadata?.phone || ''}
        email={data.site?.siteMetadata?.email || ''}
      />
    </ThemeProvider>
  );
}
