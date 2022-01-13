import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { DividedSection } from '../components/DividedSection';
import { ReactComponent as CooperationGraphic } from '../../content/statics/cooperation.svg';
import { IndexPageQuery } from '../../graphql-types';
import { Arrow } from '../layouts/default/Arrow';
import { LocalizedLink } from '../../plugins/gatsby-plugin-i18n-l10n';

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
  you: IndexPageQuery['cooperationYou'];
  us: IndexPageQuery['cooperationUs'];
};

export function CooperationSection({ you, us }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}>
      <div>
        <h2>{you?.frontmatter?.title}</h2>
        <Markup content={you?.html} />
      </div>
      <div>
        <LocalizedLink to="/future">
          <Arrow />
          <CooperationGraphic className="cooperation-graphic" />
        </LocalizedLink>
      </div>
      <div>
        <h2>{us?.frontmatter?.title}</h2>
        <Markup content={us?.html} />
      </div>
    </DividedSection>
  );
}
