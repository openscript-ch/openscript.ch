import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { darken } from 'polished';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { useState } from 'react';
import { useWindowScroll } from 'react-use';
import LanguageSelector from './LanguageSelector';
import { Sprite } from '../../components/Sprite';

const topBarStyle = (theme: Theme) => css`
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
      transition:
        transform 0.2s,
        opacity 0.2s;
      transition-delay: 0.1s;
      opacity: 0;
      transform: translateY(-1rem);
    }
  }

  & > nav {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1rem;

    ul {
      display: flex;
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
      display: none;
    }
  }

  & > nav > ul > li:not(:last-of-type)::after {
    content: '/';
    margin: 0 0.8rem;
    color: ${theme.secondaryColor};
  }
`;

const showBrandStyle = css`
  && {
    #company-name {
      transform: translateX(0);
    }
    svg {
      transition-delay: 0.1s;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

type TopBarProps = {
  title: string;
  phone: string;
  email: string;
};

const HEADER_HEIGHT = 96;

export function TopBar({ title, phone, email }: TopBarProps) {
  const [showBrand, setShowBrand] = useState(false);
  const { y: scrollY } = useWindowScroll();

  if (showBrand) {
    if (scrollY < HEADER_HEIGHT) {
      setShowBrand(false);
    }
  } else if (scrollY >= HEADER_HEIGHT) {
    setShowBrand(true);
  }

  return (
    <div css={topBarStyle} id="top-bar" className="page-padding">
      <LocalizedLink to="/" activeClassName="" css={showBrand ? showBrandStyle : null}>
        <Sprite name="brand" />
        <span id="company-name">{title}</span>
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
