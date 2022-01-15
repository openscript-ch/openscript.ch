import { PropsWithChildren } from 'react';

type MainProps = PropsWithChildren<{}>;

export function Main({ children }: MainProps) {
  return <main>{children}</main>;
}
