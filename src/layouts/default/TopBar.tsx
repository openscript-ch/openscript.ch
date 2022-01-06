import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { darken } from 'polished';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import { Arrow } from './Arrow';
import LanguageSelector from './LanguageSelector';

const topBarStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  background-color: ${darken(0.05, theme.primaryColor)};
  padding: 0 10%;
  font-weight: bold;
  color: ${theme.backgroundColor};

  @media (max-width: ${theme.breakpoints.medium}) {
    padding: 0 1rem;
  }

  a {
    color: ${theme.backgroundColor};

    &:hover {
      color: ${theme.secondaryColor};
    }
  }

  h1 {
    font-size: 0.8rem;
  }

  & > nav {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${theme.breakpoints.small}) {
      display: none;
    }
  }

  & > nav > nav {
    border-left: 2px solid ${theme.backgroundColor};
    margin-left: 0.8rem;
  }

  svg {
    margin: 0 0.8rem;
    height: 0.8rem;
    width: auto;

    &:last-child {
      margin-right: 0;
    }
  }
`;

type TopBarProps = {
  title: string;
  phone: string;
  email: string;
};

export function TopBar({ title, phone, email }: TopBarProps) {
  return (
    <div css={topBarStyle}>
      <LocalizedLink to="/">
        <h1>{title}</h1>
      </LocalizedLink>
      <nav>
        <Arrow rotation={270} />
        <Markup content={phone} />
        <Arrow rotation={310} />
        <Markup content={email} />
        <LanguageSelector />
        <Arrow />
      </nav>
    </div>
  );
}
