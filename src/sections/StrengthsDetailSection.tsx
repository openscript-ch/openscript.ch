import { PropsWithChildren } from 'react';
import { IterableElement } from 'type-fest';
import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { DividedSection } from '../components/DividedSection';
import { Sprite, SpriteProps } from '../components/Sprite';

const sectionStyle = (theme: Theme) => css`
  position: relative;
  z-index: 0;
  overflow: hidden;

  &:nth-of-type(odd) {
    background-color: ${theme.whiteColor};
    > svg {
      fill: ${theme.backgroundColor};
      right: 0;
      left: unset;
    }
  }

  > svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 90%;
    width: auto;
    fill: ${theme.whiteColor};
    opacity: 0.5;
    z-index: -1;
  }

  &:last-of-type + svg {
    display: none;
  }
`;

const skillStyles = (isWhiteSection: boolean) => (theme: Theme) =>
  css`
    padding: ${theme.gutter};
    list-style: none;
    display: flex;
    gap: ${theme.gutter};

    background-color: ${isWhiteSection ? theme.backgroundColor : theme.whiteColor};

    &:not(:last-child) {
      margin-bottom: ${theme.gutter};
    }

    --offset-size: 10rem;

    &:nth-of-type(even) {
      margin-left: var(--offset-size);
      flex-direction: row-reverse;
    }

    &:nth-of-type(odd) {
      margin-right: var(--offset-size);
    }

    > div {
      flex: 1;

      h3 {
        margin-top: 0;
      }
    }

    svg {
      width: var(--offset-size);
      height: auto;
      fill: ${isWhiteSection ? theme.whiteColor : theme.backgroundColor};
    }
  `;

type StrengthsDetailSectionProps = {
  strength: IterableElement<Queries.StrengthsPageQuery['strengths']['nodes']>;
  index: number;
};

export function StrengthsDetailSection({ strength, index }: StrengthsDetailSectionProps) {
  const theme = useTheme();

  const isWhiteSection = index % 2 === 1;

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.whiteColor} flipVertically={isWhiteSection} css={sectionStyle}>
      <Sprite name={strength.frontmatter?.sprite as SpriteProps['name']} />

      <ul>
        {strength.frontmatter?.skills?.map(skill => (
          <li css={skillStyles(isWhiteSection)}>
            <Sprite name={skill?.childMarkdownRemark?.frontmatter?.sprite as SpriteProps['name']} />
            <div>
              <h3>{skill?.childMarkdownRemark?.frontmatter?.title}</h3>
              <Markup content={skill?.childMarkdownRemark?.html} />
            </div>
          </li>
        ))}
      </ul>
    </DividedSection>
  );
}
