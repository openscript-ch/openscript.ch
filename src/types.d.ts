/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    blackColor: string;
    whiteColor: string;
    darkerSibling: string;
    brighterSibling: string;
    gutter: string;
    fonts: {
      general: string;
      headings: string;
    };
    breakpoints: {
      tiny: string;
      small: string;
      medium: string;
      big: string;
      huge: string;
    };
    variables: Omit<Theme, 'variables'>;
  }
}
