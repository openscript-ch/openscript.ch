import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';
import { ReactComponent as Logos } from '../../content/statics/logos.svg';

const sectionStyle = (theme: Theme) => css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  > * {
    flex: 1;
    min-width: 20rem;
  }

  .text-box {
    background-color: ${theme.whiteColor};
    padding: 1rem;

    h2 {
      text-align: center;
    }
  }

  svg {
    a {
      &:hover > * {
        fill: ${theme.secondaryColor} !important;
      }
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
      <Logos />
    </DividedSection>
  );
}
