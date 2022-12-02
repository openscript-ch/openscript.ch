import { Fragment } from 'react';
import { NavigationBar } from './NavigationBar';
import { TopBar } from './TopBar';

type HeaderProps = {
  title: string;
  phone: string;
  email: string;
};

export function Header({ title, phone, email }: HeaderProps) {
  return (
    <Fragment>
      <TopBar title={title} phone={phone} email={email} />
      <header>
        <NavigationBar phone={phone} email={email} />
      </header>
    </Fragment>
  );
}
