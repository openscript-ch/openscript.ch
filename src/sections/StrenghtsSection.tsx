import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { Markup } from 'interweave';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Arrow } from '../components/Arrow';
import { Sprite, SpriteProps } from '../components/Sprite';

const tabsStyle = (theme: Theme) => css`
  display: flex;
  overflow-y: auto;

  > div {
    flex-basis: 15rem;
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(${theme.variables.gutter});
      cursor: pointer;
      color: white;
      transition: background-color 0.2s;
      height: 100%;

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
  }
`;
const strengthContentContainerStyle = (theme: Theme) => css`
  background-color: white;
  padding: var(${theme.variables.gutter});

  ul {
    list-style: none;
    margin-top: var(${theme.variables.gutter});
    display: grid;
    gap: var(${theme.variables.gutter});
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    li {
      display: inline-flex;
      flex-direction: column;
      background-color: var(${theme.variables.backgroundColor});
      padding: 1rem;

      img {
        max-height: 5rem;
        margin-bottom: 0.5rem;
      }

      h4 {
        font-size: 0.9rem;
        margin: 0;
        margin-top: 0.5rem;
        flex: 1;
      }

      button {
        justify-self: flex-end;
      }
    }
  }

  blockquote {
    font-style: italic;
  }
`;

type Props = {
  strengths: Queries.IndexPageQuery['strengths'];
};

export function StrengthsSection({ strengths }: Props) {
  const { formatMessage } = useIntl();
  const [selectedStrength, setSelectedStrength] = useState(strengths.nodes.find(({ frontmatter }) => frontmatter?.order === 1));

  const sortedStrengths = Array.from(strengths.nodes).sort((a, b) => (a.frontmatter?.order ?? 0) - (b.frontmatter?.order ?? 0));

  return (
    <article>
      <div css={tabsStyle}>
        {sortedStrengths.map(strength => {
          const { order, title, sprite } = strength.frontmatter ?? {};
          return (
            <div>
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
      </div>
      <div css={strengthContentContainerStyle}>
        <blockquote>
          <Markup content={selectedStrength?.html} />
        </blockquote>
        <ul>
          {selectedStrength?.frontmatter?.skills?.map(skill => {
            const { title, icon, link } = skill?.childMarkdownRemark?.frontmatter ?? {};
            return (
              <li>
                <img src={icon?.publicURL ?? undefined} alt={`${title}-icon`} />
                <h4>{title}</h4>
                <LocalizedLink to={link ?? ''}>
                  {formatMessage({ id: 'action.learnMore' })} <Arrow rotation={270} />
                </LocalizedLink>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
