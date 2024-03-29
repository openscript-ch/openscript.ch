import { css, Theme } from '@emotion/react';
import { lighten } from 'polished';
import {
  PTSans700italicTTF,
  PTSans700italicWOFF,
  PTSans700italicWOFF2,
  PTSans700TTF,
  PTSans700WOFF,
  PTSans700WOFF2,
  PTSansitalicTTF,
  PTSansitalicWOFF,
  PTSansitalicWOFF2,
  PTSansregularTTF,
  PTSansregularWOFF,
  PTSansregularWOFF2,
  TwoMASSJ1808HeavyTTF,
  TwoMASSJ1808HeavyWOFF,
  TwoMASSJ1808HeavyWOFF2,
  TwoMASSJ1808NormalTTF,
  TwoMASSJ1808NormalWOFF,
  TwoMASSJ1808NormalWOFF2,
} from '../fonts/fonts';
import { defaultCSSVariables } from './defaultTheme';

export const defaultStyles = (theme: Theme) => css`
  ${defaultCSSVariables}

  @font-face {
    font-family: '2MASS J1808';
    src:
      url(${TwoMASSJ1808NormalWOFF2}) format('woff2'),
      url(${TwoMASSJ1808NormalWOFF}) format('woff'),
      url(${TwoMASSJ1808NormalTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: '2MASS J1808';
    src:
      url(${TwoMASSJ1808HeavyWOFF2}) format('woff2'),
      url(${TwoMASSJ1808HeavyWOFF}) format('woff'),
      url(${TwoMASSJ1808HeavyTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PT Sans';
    src:
      url(${PTSansregularWOFF2}) format('woff2'),
      url(${PTSansregularWOFF}) format('woff'),
      url(${PTSansregularTTF}) format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'PT Sans';
    src:
      url(${PTSansitalicWOFF2}) format('woff2'),
      url(${PTSansitalicWOFF}) format('woff'),
      url(${PTSansitalicTTF}) format('truetype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'PT Sans';
    src:
      url(${PTSans700WOFF2}) format('woff2'),
      url(${PTSans700WOFF}) format('woff'),
      url(${PTSans700TTF}) format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'PT Sans';
    src:
      url(${PTSans700italicWOFF2}) format('woff2'),
      url(${PTSans700italicWOFF}) format('woff'),
      url(${PTSans700italicTTF}) format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper,
  main {
    margin: 0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    font-family: ${theme.fonts.general};
    background-color: ${theme.backgroundColor};

    @media (max-width: ${theme.breakpoints.big}) {
      font-size: 18px;
    }
  }

  ::selection {
    background: ${lighten(0.1, theme.primaryColor)};
  }

  main {
    hyphens: auto;
  }

  main > section,
  header > div,
  footer,
  .page-padding {
    padding: 0 20%;

    @media (max-width: ${theme.breakpoints.big}) {
      padding: 0 10%;
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0 1rem;
    }
  }

  main section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  footer {
    padding-block: var(${theme.variables.gutter});
  }

  #company-name {
    font-family: ${theme.fonts.headings};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.headings};
    margin-top: 3rem;
    margin-bottom: 1.5em;
  }

  h1,
  h2 {
    margin-top: 0;
  }

  section > h2 {
    margin-top: 3rem;
  }

  h2 {
    font-size: 1.25em;
  }

  p {
    margin-bottom: 0.5rem;
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    min-width: 0;
  }

  a,
  button {
    text-decoration: none;
    color: ${theme.blackColor};
    font-weight: 700;

    &:hover {
      color: ${theme.secondaryColor};
    }
  }

  #top-bar a,
  header > a,
  header > div > nav:not(.open) > ul > li > a,
  footer a {
    color: ${theme.backgroundColor};
    fill: ${theme.backgroundColor};

    &:hover,
    &.active {
      color: ${theme.whiteColor};
      fill: ${theme.whiteColor};
    }
  }

  header ul li ul li a.active {
    color: ${theme.secondaryColor} !important;
  }

  nav ul {
    list-style: none;
  }
`;
