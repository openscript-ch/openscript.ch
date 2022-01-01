import { css, Theme } from '@emotion/react';
import { NavigationBar } from './NavigationBar';
import { TopBar } from './TopBar';

const headerStyle = (theme: Theme) => css``;

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <TopBar />
      <NavigationBar title={title} />
    </header>
  );
}
