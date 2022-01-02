import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';

const footerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 8rem;
  background-color: ${theme.primaryColor};
  color: ${theme.backgroundColor};

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
`;

type FooterProps = {
  address: string;
  phone: string;
  email: string;
};

export function Footer({ address, phone, email }: FooterProps) {
  return (
    <footer css={footerStyle}>
      <div>
        <Markup content={address} />
        <Markup content={phone} />
        <Markup content={email} />
      </div>
    </footer>
  );
}
