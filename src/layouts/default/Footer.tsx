import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { Arrow } from './Arrow';
import { ReactComponent as Github } from '../../images/Github.svg';
import { ReactComponent as Linkedin } from '../../images/Linkedin.svg';

const footerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  min-height: 10rem;
  background-color: ${theme.primaryColor};
  color: ${theme.backgroundColor};
  overflow: hidden;

  .address-section {
    display: flex;

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
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 2rem;
      height: auto;
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
      <div className="address-section">
        <Arrow rotation={300} />
        <div>
          <Markup content={address} />
          <Markup content={phone} />
          <Markup content={email} />
        </div>
      </div>

      <div className="social-media">
        <a href="https://github.com/openscript-ch">
          <Github />
        </a>
        <a href="https://www.linkedin.com/company/openscript/">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}
