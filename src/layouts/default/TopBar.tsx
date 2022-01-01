import { css, Theme } from '@emotion/react';
import { darken } from 'polished';

const topBarStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${darken(0.05, theme.primaryColor)};
  padding: 0 10%;
  font-weight: bold;
  color: ${theme.backgroundColor};

  @media (max-width: ${theme.breakpoints.tiny}) {
    padding: 0 1rem;
  }
`;

type TopBarProps = {
  title: string;
};

export function TopBar({ title }: TopBarProps) {
  return <div css={topBarStyle}>{title}</div>;
}
