import { css, Theme, useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { DividedSection } from '../components/DividedSection';

const sectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
`;

type Props = PropsWithChildren<{}>;

export function ReferencesSection({ children }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}>
      {children}
    </DividedSection>
  );
}
