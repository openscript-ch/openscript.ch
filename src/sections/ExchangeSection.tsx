import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { Arrow } from '../components/Arrow';
import { DividedSection } from '../components/DividedSection';
import { Sprite } from '../components/Sprite';

const sectionStyle = (theme: Theme) => css`
  display: flex;
  gap: var(${theme.variables.gutter});

  .text-box {
    flex: 2;
    background-color: ${theme.whiteColor};
    padding: var(${theme.variables.gutter});
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
    }

    svg {
      width: 4rem;
      height: auto;
      margin-top: var(${theme.variables.gutter});
      margin-left: auto;
    }
  }

  > svg {
    flex: 3;
    max-height: 20rem;
    a:hover > * {
      fill: ${theme.secondaryColor} !important;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;

    .text-box svg {
      transform: rotate(0);
      margin-inline: auto;
    }
  }
`;

type Props = {
  exchange: Queries.IndexPageQuery['exchange'];
};

export function ExchangeSection({ exchange }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      <div className="text-box">
        <h2>{exchange?.frontmatter?.title}</h2>
        <Markup content={exchange?.body} />

        <Arrow rotation={240} />
      </div>
      <Sprite name="logos" />
    </DividedSection>
  );
}
