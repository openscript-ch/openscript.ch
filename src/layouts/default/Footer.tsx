import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { FormattedMessage } from 'react-intl';
import { Arrow } from './Arrow';
import { ReactComponent as Github } from '../../images/Github.svg';
import { ReactComponent as Linkedin } from '../../images/Linkedin.svg';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';

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

    svg {
      width: 4rem;
      height: auto;
      margin-right: 1rem;
      align-self: flex-end;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: var(${theme.variables.gutter});
    font-size: 1.4rem;

    ul {
      list-style: none;
      display: flex;
    }
  }

  .social-media {
    border-left: 2px solid ${theme.backgroundColor};
    padding-left: var(${theme.variables.gutter});
    display: flex;
    align-items: center;
    gap: var(${theme.variables.gutter});

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
      <nav>
        <ul className="links">
          <li>
            <LocalizedLink to="/imprint">
              <FormattedMessage id="menu.imprint" />
            </LocalizedLink>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="https://github.com/openscript-ch">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/openscript/">
              <Linkedin />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
