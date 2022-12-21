import { css, Theme } from '@emotion/react';
import { convertThemeToCSSVariables } from './themeHelper';

export const defaultTheme: Theme = {
  primaryColor: '#539350',
  secondaryColor: '#fa5100',
  backgroundColor: '#ede9df',
  blackColor: '#231f20',
  whiteColor: '#ffffff',
  darkerSibling: '0.05',
  brighterSibling: '0.05',
  gutter: '2rem',
  fonts: {
    general: '"PT Sans", sans-serif',
    headings: '"2MASS J1808", sans-serif',
  },
  breakpoints: {
    tiny: '400px',
    small: '640px',
    medium: '1080px',
    big: '1920px',
    huge: '2560px',
  },
  variables: {
    primaryColor: '--primary-color',
    secondaryColor: '--secondary-color',
    backgroundColor: '--background-color',
    blackColor: '--black-color',
    whiteColor: '--white-color',
    darkerSibling: '--darker-sibling',
    brighterSibling: '--brighter-sibling',
    gutter: '--gutter',
    fonts: {
      general: '--fonts-general',
      headings: '--fonts-headings',
    },
    breakpoints: {
      tiny: '--breakpoints-tiny',
      small: '--breakpoints-small',
      medium: '--breakpoints-medium',
      big: '--breakpoints-big',
      huge: '--breakpoints-huge',
    },
  },
};

export const defaultCSSVariables = css`
  :root {
    ${convertThemeToCSSVariables(defaultTheme)}
  }
`;
