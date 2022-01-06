import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import React from 'react';
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
    display: flex;
    gap: 1rem;

    a {
      color: ${theme.backgroundColor};

      &:hover {
        color: ${theme.secondaryColor} !important;
      }
    }
  }

  .bottom-section {
    display: none;
  }

  &.open {
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

    ul {
      display: block;
    }

    > ul {
      margin-top: 10rem;

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
          color: ${theme.blackColor};
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
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <BurgerButton isOpen={isOpen} onClick={toggleOpen} />

      <nav css={navStyle} className={isOpen ? 'open' : ''}>
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
    </>
  );
}
