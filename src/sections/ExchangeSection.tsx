import { useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { DividedSection } from '../components/DividedSection';

type Props = PropsWithChildren<{}>;

export function ExchangeSection({ children }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor}>
      {children}
    </DividedSection>
  );
}
