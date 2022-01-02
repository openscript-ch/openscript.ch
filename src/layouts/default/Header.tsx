import { css, Theme } from '@emotion/react';
import { NavigationBar } from './NavigationBar';
import { TopBar } from './TopBar';

type HeaderProps = {
  title: string;
  phone: string;
  email: string;
};

export function Header({ title, phone, email }: HeaderProps) {
  return (
    <header>
      <TopBar title={title} phone={phone} email={email} />
      <NavigationBar />
    </header>
  );
}
