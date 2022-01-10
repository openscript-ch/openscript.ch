import { useTheme } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';

type Props = {
  exchange: IndexPageQuery['exchange'];
};

export function ExchangeSection({ exchange }: Props) {
  const theme = useTheme();

  return <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor}></DividedSection>;
}
