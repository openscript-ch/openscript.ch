import { css, Theme, useTheme } from '@emotion/react';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';

const sectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
`;

type Props = {
  softwareReferences: IndexPageQuery['softwareReferences'];
};

export function ReferencesSection({ softwareReferences }: Props) {
  const theme = useTheme();

  return <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}></DividedSection>;
}
