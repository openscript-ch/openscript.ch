import { css, Theme } from '@emotion/react';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import LanguageSelector from './LanguageSelector';
import MainNavigation from './MainNavigation';

const navigationBarStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: ${theme.primaryColor};

  padding: 0 10%;

  @media (max-width: ${theme.breakpoints.tiny}) {
    padding: 0 1rem;
  }
`;

type NavigationBarProps = {};

export function NavigationBar() {
  return (
    <div css={navigationBarStyle}>
      <LocalizedLink to="/">Logo</LocalizedLink>
      <MainNavigation />
      <LanguageSelector />
    </div>
  );
}
