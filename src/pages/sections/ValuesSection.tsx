import { css, useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { DividedSection } from '../../components/DividedSection';

const sectionStyle = css``;

type Props = PropsWithChildren<{}>;

export function ValuesSection({ children }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      {children}
    </DividedSection>
  );
}
