import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { Arrow } from '../components/Arrow';
import { Sprite } from '../components/Sprite';

type Props = {
  exchange: Queries.IndexPageQuery['exchange'];
};

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

export function TechnologiesSection({ exchange }: Props) {
  return (
    <article css={sectionStyle}>
      <div className="text-box">
        <h2>{exchange?.frontmatter?.title}</h2>
        <Markup content={exchange?.html} />

        <Arrow rotation={240} />
      </div>
      <Sprite name="logos" />
    </article>
  );
}
