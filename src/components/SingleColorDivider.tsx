import { css } from '@emotion/react';

type SingleColorDividerProps = {
  upperColor: string;
  lowerColor: string;
  flipVertically?: boolean;
  flipHorizontally?: boolean;
};

export function SingleColorDivider({ flipVertically, flipHorizontally, upperColor, lowerColor }: SingleColorDividerProps) {
  return (
    <svg
      version="2.0"
      css={css`
        width: 100%;
        height: auto;
        z-index: 10;
        transform: scaleY(${flipVertically ? '-1' : '1'}) scaleX(${flipHorizontally ? '-1' : '1'});
        background-color: ${flipVertically ? lowerColor : upperColor};
        margin-bottom: -1px; // anti aliasing bottom gap fix

        path:nth-of-type(1) {
          fill: ${flipVertically ? upperColor : lowerColor};
          transform: translateY(1px); // anti aliasing bottom gap fix
        }
      `}
    >
      <use href="/symbols.svg#singleColorDivider" />
    </svg>
  );
}
