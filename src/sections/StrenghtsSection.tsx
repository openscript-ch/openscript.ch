import { Markup } from 'interweave';
import { useState } from 'react';

type Props = {
  strengths: Queries.IndexPageQuery['strengths'];
};

export function StrengthsSection({ strengths }: Props) {
  const [selectedStrength, setSelectedStrength] = useState(strengths.nodes.find(({ frontmatter }) => frontmatter?.order === 1));

  return (
    <article>
      {strengths.nodes.map(strength => {
        const { order, title } = strength.frontmatter ?? {};
        return (
          <label htmlFor={`${order}`}>
            {title}
            <input
              id={`${order}`}
              checked={selectedStrength?.frontmatter?.order === order}
              onChange={() => setSelectedStrength(strength)}
              name="services"
              type="radio"
            />
          </label>
        );
      })}
      <div>
        <Markup content={selectedStrength?.html} />
      </div>
    </article>
  );
}
