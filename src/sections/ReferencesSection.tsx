import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DividedSection } from '../components/DividedSection';

const sectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

  .reference-box {
    padding: 1rem;
    background-color: ${theme.backgroundColor};

    img {
      display: block;
      height: 10rem;
      width: auto;
      margin-inline: auto;
      margin-bottom: 1rem;
    }
  }
`;

type Props = {
  softwareReferences: IndexPageQuery['softwareReferences'];
};

export function ReferencesSection({ softwareReferences }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}>
      {softwareReferences.nodes.map(reference => (
        <div className="reference-box">
          <img src={reference.frontmatter?.icon?.publicURL ?? ''} alt={reference.frontmatter?.title ?? ''} />
          <h3>{reference.frontmatter?.title}</h3>
          <Markup content={reference.html} />
        </div>
      ))}
    </DividedSection>
  );
}
