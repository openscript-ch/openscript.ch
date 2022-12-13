import { css, Theme } from '@emotion/react';
import { Sprite } from './Sprite';

type ArrowProps = {
  rotation?: number;
};

export function Arrow({ rotation = 0 }: ArrowProps) {
  return (
    <Sprite
      name="arrow"
      css={(theme: Theme) => css`
        fill: ${theme.secondaryColor};
        transform: rotate(${`${rotation}deg`});
      `}
    />
  );
}
