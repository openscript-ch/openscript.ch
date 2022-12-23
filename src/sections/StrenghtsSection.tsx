import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { Markup } from 'interweave';
import { useState } from 'react';
import { Sprite, SpriteProps } from '../components/Sprite';

const tabStyle = (theme: Theme) => css`
  display: inline-block;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    padding: var(${theme.variables.gutter});
    cursor: pointer;
    color: white;
    transition: background-color 0.2s;

    h4 {
      font-size: 0.9rem;
      margin: 0;
      margin-top: 0.5rem;
    }

    svg {
      height: 3rem;
      width: auto;
      margin-bottom: 0.5rem;
      fill: white;
    }
  }

  input[type='radio'] {
    display: none;

    &:checked ~ label,
    & ~ label:hover {
      color: var(${theme.variables.secondaryColor});
      svg {
        fill: var(${theme.variables.secondaryColor});
      }
    }

    &:checked ~ label {
      background-color: white;
    }
  }
`;

type Props = {
  strengths: Queries.IndexPageQuery['strengths'];
};

export function StrengthsSection({ strengths }: Props) {
  const [selectedStrength, setSelectedStrength] = useState(strengths.nodes.find(({ frontmatter }) => frontmatter?.order === 1));

  const sortedStrengths = Array.from(strengths.nodes).sort((a, b) => (a.frontmatter?.order ?? 0) - (b.frontmatter?.order ?? 0));

  return (
    <article>
      {sortedStrengths.map(strength => {
        const { order, title, sprite } = strength.frontmatter ?? {};
        return (
          <div css={tabStyle}>
            <input
              id={`${order}`}
              checked={selectedStrength?.frontmatter?.order === order}
              onChange={() => setSelectedStrength(strength)}
              name="services"
              type="radio"
            />
            <label htmlFor={`${order}`}>
              <Sprite name={sprite as SpriteProps['name']} />
              <h4>{title}</h4>
            </label>
          </div>
        );
      })}
      <div>
        <Markup content={selectedStrength?.html} />
      </div>
    </article>
  );
}
