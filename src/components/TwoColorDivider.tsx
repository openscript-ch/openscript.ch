import { css, Theme } from '@emotion/react';
import { lighten } from 'polished';
import { Sprite } from './Sprite';

type TwoColorDividerProps = {
  flipVertical?: boolean;
};

export function TwoColorDivider({ flipVertical }: TwoColorDividerProps) {
  return (
    <Sprite
      name="two-color-divider"
      css={(theme: Theme) => css`
        width: 100%;
        height: auto;
        z-index: 10;
        margin-bottom: -1px; // fix subpixel rendering gaps
        ${flipVertical &&
        css`
          transform: scaleY(-1);
        `}

        use {
          --upper-segment: ${theme.primaryColor};
          --lower-segment: ${lighten(theme.brighterSibling, theme.primaryColor)};
        }
      `}
    />
  );
}
