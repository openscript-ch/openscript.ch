import { css, Theme } from '@emotion/react';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import MainNavigation from './MainNavigation';
import { ReactComponent as Brand } from '../../images/brand.svg';

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

  > * > svg {
    fill: ${theme.backgroundColor};
    width: auto;
    height: 3rem;
  }
`;

const brandLinkStyle = (theme: Theme) => css`
  display: inline-flex;

  svg:hover {
    fill: ${theme.secondaryColor};
  }
`;

type NavigationBarProps = {
  phone: string;
  email: string;
};

export function NavigationBar({ phone, email }: NavigationBarProps) {
  return (
    <div css={navigationBarStyle}>
      <LocalizedLink to="/" css={brandLinkStyle}>
        <Brand />
      </LocalizedLink>
      <MainNavigation phone={phone} email={email} asBurgerMenu />
    </div>
  );
}
