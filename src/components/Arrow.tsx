import { css, Theme } from '@emotion/react';
import { Symbol } from './Symbol';

type ArrowProps = {
  rotation?: number;
};

export function Arrow({ rotation = 0 }: ArrowProps) {
  return (
    <Symbol
      name="arrow"
      css={(theme: Theme) => css`
        fill: ${theme.secondaryColor};
        transform: rotate(${`${rotation}deg`});
      `}
    />
  );
}
