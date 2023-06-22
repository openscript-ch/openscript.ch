import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { Arrow } from '../../components/Arrow';
import { Sprite } from '../../components/Sprite';

const footerStyle = (theme: Theme) => css`
  display: flex;
  min-height: 10rem;
  background-color: ${theme.primaryColor};
  color: ${theme.backgroundColor};

  > svg {
    width: 4rem;
    height: auto;
    margin-right: 1rem;
    align-self: flex-end;
  }

  > div {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(${theme.variables.gutter});

    nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(${theme.variables.gutter});

      &:first-child {
        flex-wrap: wrap;
      }

      &:last-child {
        flex: 1;
      }

      .social-media {
        display: flex;
        gap: var(${theme.variables.gutter});
        border-left: 2px solid ${theme.backgroundColor};
        padding-left: var(${theme.variables.gutter});

        a {
          display: flex;

          svg {
            width: 2rem;
            height: auto;
          }
        }
      }
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
      <Arrow rotation={300} />
      <div>
        <nav>
          <Markup content={address} />
          <ul>
            <li>
              <Markup content={phone} />
            </li>
            <li>
              <Markup content={email} />
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <LocalizedLink to="/imprint">
                <FormattedMessage id="menu.imprint" />
              </LocalizedLink>
            </li>
          </ul>
          <ul className="social-media">
            <li>
              <a href="https://github.com/openscript-ch">
                <Sprite name="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/openscript/">
                <Sprite name="linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
