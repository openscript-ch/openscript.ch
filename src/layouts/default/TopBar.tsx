import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { darken } from 'polished';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { useState } from 'react';
import { useWindowScroll } from 'react-use';
import LanguageSelector from './LanguageSelector';
import { Sprite } from '../../components/Sprite';

const topBarStyle = (showLogo: boolean) => (theme: Theme) =>
  css`
    position: sticky;
    z-index: 20;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    background-color: ${darken(0.05, theme.primaryColor)};
    font-weight: bold;
    color: ${theme.backgroundColor};

    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0 1rem;
    }

    > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      #company-name {
        font-size: 0.8rem;
        transform: translateX(-2.5rem);
        transition: transform 0.2s;
      }

      svg {
        fill: ${theme.backgroundColor};
        width: 2rem;
        height: auto;
        transition: transform 0.2s, opacity 0.2s;
        opacity: 0;
        transform: translateY(-1rem);
      }

      ${showLogo &&
      css`
        #company-name {
          transform: translateX(0) !important;
        }
        svg {
          transition-delay: 0.1s !important;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}
    }

    & > nav {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      @media screen and (max-width: ${theme.breakpoints.small}) {
        display: none;
      }
    }

    & > nav > ul > li:not(:last-of-type)::after {
      content: '/';
      margin: 0 0.5rem;
      color: ${theme.secondaryColor};
    }
  `;

type TopBarProps = {
  title: string;
  phone: string;
  email: string;
};

const HEADER_HEIGHT = 96;

export function TopBar({ title, phone, email }: TopBarProps) {
  const [showLogo, setShowLogo] = useState(false);
  const { y: scrollY } = useWindowScroll();

  if (showLogo) {
    if (scrollY < HEADER_HEIGHT) {
      setShowLogo(false);
    }
  } else if (scrollY >= HEADER_HEIGHT) {
    setShowLogo(true);
  }

  return (
    <div css={topBarStyle(showLogo)} id="top-bar" className="page-padding">
      <LocalizedLink to="/" activeClassName="">
        <Sprite name="brand" />
        <div id="company-name">{title}</div>
      </LocalizedLink>
      <nav>
        <ul>
          <li>
            <Markup content={phone} />
          </li>
          <li>
            <Markup content={email} />
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </div>
  );
}
