import { css, Theme } from '@emotion/react';
import { lighten } from 'polished';
import { Sprite } from './Sprite';

type TwoColorDividerProps = {
  flipVertical?: boolean;
};

export function TwoColorDivider({ flipVertical }: TwoColorDividerProps) {
  return (
    <Sprite
      name="twoColorDivider"
      css={(theme: Theme) => css`
        width: 100%;
        height: auto;
        z-index: 10;
        margin-bottom: -1px; // fix subpixel rendering gaps
        ${flipVertical &&
        css`
          transform: scaleY(-1);
        `}

        path:nth-of-type(1) {
          fill: ${theme.primaryColor};
        }

        path:nth-of-type(2) {
          fill: ${lighten(0.05, theme.primaryColor)};
        }
      `}
    />
  );
}
