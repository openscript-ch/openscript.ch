import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { Arrow } from '../components/Arrow';
import SpriteData from '../../content/images/sprite.json';
import { Sprite } from '../components/Sprite';

type Props = {
  exchange: Queries.IndexPageQuery['exchange'];
};

const sectionStyle = (theme: Theme) => css`
  display: flex;
  gap: var(${theme.variables.gutter});

  .text-box {
    background-color: ${theme.whiteColor};
    padding: var(${theme.variables.gutter});
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 15rem;

    svg {
      width: 4rem;
      height: auto;
      margin-top: auto;
    }
  }

  .logos-grid {
    flex: 2;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 3rem;

    a {
      display: flex;
      justify-content: center;
      transition: transform 0.2s;
      transform-origin: center;

      svg {
        transition: transform 0.2s;
        fill: white;
        width: 100%;
        max-width: 4.5rem;
        height: auto;
        cursor: pointer;
      }

      &:hover {
        transform: scale(1.2);

        svg {
          fill: var(${theme.variables.secondaryColor});
        }
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    .logos-grid {
      gap: 2rem;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column-reverse;

    .text-box {
      flex: 1;
      svg {
        transform: rotate(0);
        margin-inline: auto;
      }
    }
  }
`;

/**
 * Calculates how near the element with the given index is to the center of the grid.
 *
 * @param index of the element in the grid
 * @param cols amount in grid
 * @param rows amount in grid
 * @returns score from 0 - 1 how near the element is to the center of the grid.
 */
const getCloseToCenterScore = (index: number, cols = 5, rows = 3) => {
  const x = index % cols;
  const y = (index - x) / cols;

  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;

  return (1 - (Math.abs(x - centerCol) + Math.abs(y - centerRow)) + (centerCol + centerRow - 1)) / (centerCol + centerRow);
};

export function TechnologiesSection({ exchange }: Props) {
  const sprites: { label: string; name: keyof typeof SpriteData; url: string }[] = [
    { label: 'k0s Project - Lightweight Kubernetes Distribution', name: 'logo-k0s', url: 'https://k0sproject.io/' },
    { label: 'GatsbyJS - Blazing Fast Modern Site Generator for React', name: 'logo-gatsby', url: 'https://gatsbyjs.com' },
    { label: 'NestJS - A Progressive Node.js Framework', name: 'logo-nestjs', url: 'https://nestjs.com' },
    { label: 'GraphQL - A Query Language for APIs', name: 'logo-graphql', url: 'https://graphql.org' },
    { label: 'Supabase - Open Source Firebase Alternative', name: 'logo-supabase', url: 'https://supabase.com' },
    { label: 'Docker - Develop, Ship and Run Anywhere', name: 'logo-docker', url: 'https://docker.com' },
    { label: 'TypeScript - Typed Superset of JavaScript', name: 'logo-ts', url: 'https://typescriptlang.org' },
    { label: 'React - A JavaScript Library for Building User Interfaces', name: 'logo-react', url: 'https://reactjs.org' },
    { label: 'Ruby - A Programmers Best Friend', name: 'logo-ruby', url: 'https://ruby-lang.org' },
    { label: 'PostgreSQL - The Worlds Most Advanced Open Source Relational Database', name: 'logo-postgres', url: 'https://postgresql.org' },
    { label: 'Visual Studio Code - Code Editing. Redefined.', name: 'logo-vscode', url: 'https://code.visualstudio.com' },
    { label: 'HTML Developer Guide - Mozilla Developer Network', name: 'logo-html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { label: 'CSS Developer Guide - Mozilla Developer Network', name: 'logo-css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { label: 'Ruby on Rails - A Web-Application Framework', name: 'logo-rails', url: 'https://rubyonrails.org' },
    { label: 'Gitea - A Painless Self-Hosted Git Service', name: 'logo-gitea', url: 'https://gitea.io' },
  ];

  const getRandomNumberBetween = (min: number, max: number) => Math.random() * (max - min) + min;

  return (
    <article css={sectionStyle}>
      <div className="logos-grid">
        {sprites.map((sprite, index) => {
          const scaling = 0.7 + getCloseToCenterScore(index) ** 4 * 1.1;
          return (
            <a
              aria-label={sprite.label}
              key={sprite.name}
              href={sprite.url}
              css={css`
                svg {
                  transform: rotate(${getRandomNumberBetween(-45, 45)}deg) scale(${scaling});
                }
                :hover {
                  svg {
                    transform: rotate(0) scale(${scaling});
                  }
                }
              `}
            >
              <Sprite name={sprite.name} />
            </a>
          );
        })}
      </div>
      <div className="text-box">
        <h2>{exchange?.frontmatter?.title}</h2>
        <Markup content={exchange?.html} />

        <Arrow rotation={120} />
      </div>
    </article>
  );
}
