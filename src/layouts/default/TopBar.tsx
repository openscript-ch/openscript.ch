import { css, Theme } from '@emotion/react';
import { darken } from 'polished';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
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

  @media (max-width: ${theme.breakpoints.tiny}) {
    padding: 0 1rem;
  }

  a {
    color: ${theme.backgroundColor};

    &:hover {
      color: ${theme.secondaryColor};
    }
  }

  h1 {
    font-size: 0.6rem;
  }
`;

type TopBarProps = {
  title: string;
};

export function TopBar({ title }: TopBarProps) {
  return (
    <div css={topBarStyle}>
      <LocalizedLink to="/">
        <h1>{title}</h1>
      </LocalizedLink>
      <LanguageSelector />
    </div>
  );
}
