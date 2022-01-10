import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';

const sectionStyle = (theme: Theme) => css`
  display: flex;

  .text-box {
    background-color: ${theme.whiteColor};
    padding: 1rem;

    h2 {
      text-align: center;
    }
  }
`;

type Props = {
  exchange: IndexPageQuery['exchange'];
};

export function ExchangeSection({ exchange }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      <div className="text-box">
        <h2>{exchange?.frontmatter?.title}</h2>
        <Markup content={exchange?.html} />
      </div>
    </DividedSection>
  );
}
