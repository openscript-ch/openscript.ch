import { css, Theme } from '@emotion/react';
import { ReactComponent as ArrowGraphic } from '../../images/arrow.svg';

type ArrowProps = {
  rotation?: number;
};

export function Arrow({ rotation = 0 }: ArrowProps) {
  return (
    <ArrowGraphic
      css={(theme: Theme) => css`
        fill: ${theme.secondaryColor};
        transform: rotate(${`${rotation}deg`});
      `}
    />
  );
}
