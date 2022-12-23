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
    max-width: 30vw;

    svg {
      width: 4rem;
      height: auto;
      margin-top: auto;
    }
  }

  .logos-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 3rem;

    a {
      transition: transform 0.2s;

      svg {
        transition: transform 0.2s;
        fill: white;
        width: 5rem;
        height: auto;
        cursor: pointer;
        &:hover {
          fill: var(${theme.variables.secondaryColor});
        }
      }

      &:hover {
        transform: scale(1.2);
      }
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
  const sprites: { name: keyof typeof SpriteData; url: string; size: number }[] = [
    //
    { name: 'logo-k0s', url: 'https://k0sproject.io/', size: 0.5 },
    { name: 'logo-gatsby', url: 'https://gatsbyjs.com', size: 0.8 },
    { name: 'logo-nestjs', url: 'https://nestjs.com', size: 1.1 },
    { name: 'logo-graphql', url: 'https://grapqhl.org', size: 0.8 },
    { name: 'logo-supabase', url: 'https://supabase.com', size: 0.5 },
    //
    { name: 'logo-docker', url: 'https://docker.com', size: 1 },
    { name: 'logo-ts', url: 'https://typescriptlang.org', size: 1.1 },
    { name: 'logo-react', url: 'https://reactjs.org', size: 1.8 },
    { name: 'logo-ruby', url: 'https://ruby-lang.org', size: 1.1 },
    { name: 'logo-postgres', url: 'https://postgresql.org', size: 1 },
    //
    { name: 'logo-vscode', url: 'https://code.visualstudio.com', size: 0.5 },
    { name: 'logo-html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', size: 0.8 },
    { name: 'logo-css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', size: 1.1 },
    { name: 'logo-rails', url: 'https://rubyonrails.org', size: 0.8 },
    { name: 'logo-gitea', url: 'https://gitea.io', size: 0.5 },
  ];

  const getRandomNumberBetween = (min: number, max: number) => Math.random() * (max - min) + min;

  return (
    <article css={sectionStyle}>
      <div className="logos-grid">
        {sprites.map(sprite => (
          <a href={sprite.url}>
            <Sprite
              name={sprite.name}
              css={css`
                transform: rotate(${getRandomNumberBetween(-45, 45)}deg) scale(${sprite.size});
                :hover {
                  transform: rotate(0) scale(${sprite.size});
                }
              `}
            />
          </a>
        ))}
      </div>
      <div className="text-box">
        <h2>{exchange?.frontmatter?.title}</h2>
        <Markup content={exchange?.html} />

        <Arrow rotation={120} />
      </div>
    </article>
  );
}
