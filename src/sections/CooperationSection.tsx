import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { DividedSection } from '../components/DividedSection';
import { Sprite } from '../components/Sprite';
import { Arrow } from '../components/Arrow';

const sectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    gap: 0 var(${theme.variables.gutter});
  }

  div:nth-of-type(1),
  div:nth-of-type(3) {
    background-color: ${theme.backgroundColor};
    padding: var(${theme.variables.gutter});
    flex-grow: 1;
    flex-basis: 0;
    min-width: 10rem;
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    svg:first-of-type {
      width: 2rem;
      height: auto;
    }

    svg.cooperation-graphic {
      fill: ${theme.backgroundColor};
    }

    &:hover {
      svg.cooperation-graphic {
        fill: ${theme.secondaryColor};
      }
    }

    @media screen and (max-width: ${theme.breakpoints.medium}) {
      order: 1;
      min-width: 100%;

      svg:first-of-type {
        display: none;
      }
    }
  }
`;

type Props = {
  you: Queries.IndexPageQuery['cooperationYou'];
  us: Queries.IndexPageQuery['cooperationUs'];
};

export function CooperationSection({ you, us }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}>
      <div>
        <h2>{you?.frontmatter?.title}</h2>
        <Markup content={you?.body} />
      </div>
      <div>
        <LocalizedLink to="/future">
          <Arrow />
          <Sprite name="cooperation" className="cooperation-graphic" />
        </LocalizedLink>
      </div>
      <div>
        <h2>{us?.frontmatter?.title}</h2>
        <Markup content={us?.body} />
      </div>
    </DividedSection>
  );
}
