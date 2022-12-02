import { css, Theme } from '@emotion/react';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import MainNavigation from './MainNavigation';

const navigationBarStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: ${theme.primaryColor};

  @media (max-width: ${theme.breakpoints.medium}) {
    padding: 0 1rem;
  }

  > * > svg {
    fill: ${theme.backgroundColor};
    width: auto;
    height: 3rem;
  }
`;

const brandLinkStyle = () => css`
  display: inline-flex;
  margin-left: 2.5rem;
`;

type NavigationBarProps = {
  phone: string;
  email: string;
};

export function NavigationBar({ phone, email }: NavigationBarProps) {
  return (
    <div css={navigationBarStyle}>
      <LocalizedLink to="/" css={brandLinkStyle}>
        <svg version="2.0">
          <use href="/symbols.svg#brand" />
        </svg>
      </LocalizedLink>
      <MainNavigation phone={phone} email={email} />
    </div>
  );
}
