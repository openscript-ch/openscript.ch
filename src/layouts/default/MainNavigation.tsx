import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { darken, lighten } from 'polished';
import { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useLockBodyScroll } from 'react-use';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import { Arrow } from './Arrow';
import { BurgerButton } from './BurgerButton';
import LanguageSelector from './LanguageSelector';

const navStyle = (theme: Theme) => css`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
  }

  > ul {
    display: flex;
    gap: var(${theme.variables.gutter});

    > li {
      position: relative;

      svg {
        margin-left: 0.5rem;
        width: 1rem;
        height: auto;
      }

      > ul {
        display: none;
        position: absolute;
        top: 100%;
        right: -0.5rem;
        z-index: 20;
        background-color: ${lighten(0.05, theme.primaryColor)};
        white-space: nowrap;

        a {
          display: block;
          padding: 1rem;

          &:hover {
            background-color: ${darken(0.05, theme.primaryColor)};
          }
        }
      }

      &:hover {
        > ul {
          display: block;
        }
      }
    }
  }

  .bottom-section {
    display: none;
  }

  &.open {
    position: fixed;
    inset: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.backgroundColor};

    ul {
      display: block;
    }

    > ul {
      margin-top: 9rem;

      > li {
        width: 100%;
        background-color: white;

        a {
          width: 100%;
          padding: 1rem;
          color: ${theme.blackColor};
          display: flex;
          justify-content: space-between;

          svg {
            transform: rotate(270deg);
          }
        }

        > ul {
          position: static;
          background-color: ${theme.backgroundColor};

          li {
            margin-left: 1rem;

            a {
              padding: 0.8rem;
              background-color: ${theme.backgroundColor};
            }
          }
        }
      }
    }

    .bottom-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 1rem;

      svg {
        height: auto;
        width: 4rem;
      }

      li {
        margin: 0;

        a {
          font-size: 1.2rem;
          color: ${theme.blackColor};
        }
      }
    }
  }
`;

type MainNavigationProps = {
  phone: string;
  email: string;
};

export default function MainNavigation({ phone, email }: MainNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <BurgerButton isOpen={isOpen} onClick={toggleOpen} />

      <nav css={navStyle} className={isOpen ? 'open' : ''}>
        <ul>
          <li>
            <LocalizedLink to="/future">
              <FormattedMessage id="menu.future" />
              <Arrow />
            </LocalizedLink>
            <ul>
              <li>
                <LocalizedLink to="/future#first">
                  <FormattedMessage id="menu.first" />
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/future#second">
                  <FormattedMessage id="menu.second" />
                </LocalizedLink>
              </li>
            </ul>
          </li>
          <li>
            <LocalizedLink to="/present">
              <FormattedMessage id="menu.present" />
              <Arrow />
            </LocalizedLink>
            <ul>
              <li>
                <LocalizedLink to="/present#first">
                  <FormattedMessage id="menu.first" />
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/present#second">
                  <FormattedMessage id="menu.second" />
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/present#third">
                  <FormattedMessage id="menu.third" />
                </LocalizedLink>
              </li>
            </ul>
          </li>
          <li>
            <LocalizedLink to="/past">
              <FormattedMessage id="menu.past" />
              <Arrow />
            </LocalizedLink>
            <ul>
              <li>
                <LocalizedLink to="/past#first">
                  <FormattedMessage id="menu.first" />
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/past#second">
                  <FormattedMessage id="menu.second" />
                </LocalizedLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="bottom-section">
          <Arrow rotation={300} />
          <ul>
            <li>
              <LanguageSelector />
            </li>
            <li>
              <Markup content={phone} />
            </li>
            <li>
              <Markup content={email} />
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
