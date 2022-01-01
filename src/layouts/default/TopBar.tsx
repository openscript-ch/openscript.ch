import { css, Theme } from '@emotion/react';
import { darken } from 'polished';

const topBarStyle = (theme: Theme) => css`
  display: flex;
  height: 2rem;
  background-color: ${darken(0.1, theme.primaryColor)};
  padding: 0 10%;

  @media (max-width: ${theme.breakpoints.tiny}) {
    padding: 0 1rem;
  }
`;

type TopBarProps = {};

export function TopBar() {
  return <div css={topBarStyle}>joho</div>;
}
