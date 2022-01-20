import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { darken } from 'polished';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import LanguageSelector from './LanguageSelector';

const topBarStyle = (theme: Theme) => css`
  position: sticky;
  z-index: 20;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  background-color: ${darken(0.05, theme.primaryColor)};
  font-weight: bold;
  color: ${theme.backgroundColor};

  @media (max-width: ${theme.breakpoints.medium}) {
    padding: 0 1rem;
  }

  h1 {
    font-size: 0.8rem;
  }

  & > nav {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media screen and (max-width: ${theme.breakpoints.small}) {
      display: none;
    }
  }

  & > nav > ul > li:not(:last-of-type)::after {
    content: '/';
    margin: 0 0.5rem;
    color: ${theme.secondaryColor};
  }
`;

type TopBarProps = {
  title: string;
  phone: string;
  email: string;
};

export function TopBar({ title, phone, email }: TopBarProps) {
  return (
    <div css={topBarStyle} id="top-bar" className="page-padding">
      <LocalizedLink to="/" activeClassName="">
        <h1>{title}</h1>
      </LocalizedLink>
      <nav>
        <ul>
          <li>
            <Markup content={phone} />
          </li>
          <li>
            <Markup content={email} />
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </div>
  );
}
