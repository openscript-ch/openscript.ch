import { css, Theme } from '@emotion/react';

type ArrowProps = {
  rotation?: number;
};

export function Arrow({ rotation = 0 }: ArrowProps) {
  return (
    <svg
      version="2.0"
      css={(theme: Theme) => css`
        fill: ${theme.secondaryColor};
        transform: rotate(${`${rotation}deg`});
      `}
    >
      <use href="/symbols.svg#arrow" />
    </svg>
  );
}
