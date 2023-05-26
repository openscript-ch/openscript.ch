import { Theme, css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const mainStyle = (theme: Theme) => css`
  section {
    padding-left: 27.5%;
    padding-right: 27.5%;

    @media (max-width: ${theme.breakpoints.big}) {
      padding-left: 20%;
      padding-right: 20%;
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

type MainProps = PropsWithChildren<{}>;

export function ContentMain({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>;
}
