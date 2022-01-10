import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';
import { ReactComponent as Logos } from '../../content/statics/logos.svg';
import { Arrow } from '../layouts/default/Arrow';

const sectionStyle = (theme: Theme) => css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  > * {
    min-width: 18rem;
  }

  .text-box {
    flex: 2;
    background-color: ${theme.whiteColor};
    padding: 1rem;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
    }

    svg {
      width: 4rem;
      height: auto;
      margin-top: auto;
      margin-left: auto;
    }
  }

  > svg {
    flex: 3;
    max-height: 20rem;
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

        <Arrow rotation={240} />
      </div>
      <Logos />
    </DividedSection>
  );
}
