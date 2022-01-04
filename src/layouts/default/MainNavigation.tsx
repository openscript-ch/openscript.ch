import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import React from 'react';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';
import { defaultTheme } from '../../themes/defaultTheme';
import { Arrow } from './Arrow';
import { BurgerButton } from './BurgerButton';
import LanguageSelector from './LanguageSelector';

const navStyle = (theme: Theme) => css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    display: flex;
    gap: 1rem;

    a {
      color: ${theme.backgroundColor};

      &:hover {
        color: ${theme.secondaryColor} !important;
      }
    }
  }

  &.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.backgroundColor};

    > ul {
      margin-top: 10rem;
      display: block;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: white;
        margin-bottom: 0.1rem;
        a {
          display: block;
          width: 100%;
          padding: 1rem;
          color: ${defaultTheme.blackColor};
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
          color: ${defaultTheme.blackColor};
        }
      }
    }
  }
`;

type MainNavigationProps = {
  asBurgerMenu: boolean;
  phone: string;
  email: string;
};

export default function MainNavigation({ asBurgerMenu, phone, email }: MainNavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {asBurgerMenu && <BurgerButton isOpen={isOpen} onClick={toggleOpen} />}
      {(!asBurgerMenu || isOpen) && (
        <nav css={navStyle} className={asBurgerMenu ? 'overlay' : ''}>
          <ul>
            <li>
              <LocalizedLink to="/pages">Joho</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/pages">Joho</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/pages">Joho</LocalizedLink>
            </li>
          </ul>

          {asBurgerMenu && (
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
          )}
        </nav>
      )}
    </>
  );
}
