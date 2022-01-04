import { css, Theme } from '@emotion/react';
import { lighten } from 'polished';
import { ReactComponent as DividerGraphic } from '../../images/twoColorDivider.svg';

type TwoColorDividerProps = {
  flipVertical?: boolean;
};

export function TwoColorDivider({ flipVertical }: TwoColorDividerProps) {
  return (
    <DividerGraphic
      css={(theme: Theme) => css`
        width: 100%;
        height: auto;
        z-index: 10;
        margin-bottom: -1px; // fix subpixel rendering gaps
        ${flipVertical &&
        css`
          transform: scaleY(-1);
        `}

        path:nth-child(1) {
          fill: ${theme.primaryColor};
        }

        path:nth-child(2) {
          fill: ${lighten(0.05, theme.primaryColor)};
        }
      `}
    />
  );
}
