import { css } from '@emotion/react';
import { Sprite } from './Sprite';

type SingleColorDividerProps = {
  upperColor: string;
  lowerColor: string;
  flipVertically?: boolean;
  flipHorizontally?: boolean;
};

export function SingleColorDivider({ flipVertically, flipHorizontally, upperColor, lowerColor }: SingleColorDividerProps) {
  return (
    <Sprite
      name="singleColorDivider"
      css={css`
        width: 100%;
        height: auto;
        z-index: 10;
        transform: scaleY(${flipVertically ? '-1' : '1'}) scaleX(${flipHorizontally ? '-1' : '1'});
        margin-bottom: -1px; // anti aliasing bottom gap fix

        use {
          --divider-color: ${flipVertically ? upperColor : lowerColor};
          transform: translateY(1px); // anti aliasing bottom gap fix
        }
      `}
    />
  );
}
