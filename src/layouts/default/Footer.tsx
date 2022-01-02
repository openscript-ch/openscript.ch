import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { Arrow } from './Arrow';

const footerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 8rem;
  background-color: ${theme.primaryColor};
  color: ${theme.backgroundColor};
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  a {
    color: ${theme.backgroundColor};

    &:hover {
      color: ${theme.secondaryColor};
    }
  }

  svg {
    width: 4rem;
    height: auto;
    margin-right: 1rem;
    align-self: flex-end;
    margin-bottom: 0.25rem;
  }
`;

type FooterProps = {
  address: string;
  phone: string;
  email: string;
};

export function Footer({ address, phone, email }: FooterProps) {
  return (
    <footer css={footerStyle}>
      <Arrow rotation={300} />
      <div>
        <Markup content={address} />
        <Markup content={phone} />
        <Markup content={email} />
      </div>
    </footer>
  );
}
