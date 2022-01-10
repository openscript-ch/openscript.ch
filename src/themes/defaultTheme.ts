import { Theme } from '@emotion/react';

export const defaultTheme: Theme = {
  primaryColor: '#539350',
  secondaryColor: '#fa5100',
  backgroundColor: '#ede9df',
  blackColor: '#231f20',
  whiteColor: '#ffffff',
  darkerSibling: '10%',
  brighterSibling: '10%',
  fonts: {
    general: '"PT Sans", sans-serif',
    headings: '"2MASS J1808", sans-serif',
  },
  breakpoints: {
    tiny: '400px',
    small: '600px',
    medium: '1000px',
    big: '1920px',
    huge: '2560px',
  },
};
