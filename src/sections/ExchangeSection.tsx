import { useTheme } from '@emotion/react';
import { DividedSection } from '../components/DividedSection';
import { StrengthsSection } from './StrenghtsSection';
import { TechnologiesSection } from './TechnologiesSection';

type Props = {
  exchange: Queries.IndexPageQuery['exchange'];
  strengths: Queries.IndexPageQuery['strengths'];
};

export function ExchangeSection({ exchange, strengths }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor}>
      <StrengthsSection strengths={strengths} />
      <TechnologiesSection exchange={exchange} />
    </DividedSection>
  );
}
