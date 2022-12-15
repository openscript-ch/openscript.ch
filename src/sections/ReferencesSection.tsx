import { css, Theme, useTheme } from '@emotion/react';
import { Markup } from 'interweave';
import { DividedSection } from '../components/DividedSection';

const sectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};

  .software-references,
  .company-references {
    display: grid;
    gap: var(${theme.variables.gutter});
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    > * {
      padding: var(${theme.variables.gutter});
      background-color: ${theme.backgroundColor};
    }
  }

  .software-references {
    .reference-box {
      img {
        display: block;
        height: 8rem;
        width: auto;
        margin-inline: auto;
        margin-bottom: var(${theme.variables.gutter});
      }

      h3 {
        min-height: 7rem;
      }
    }
  }
  .company-references {
    margin-top: 3rem;

    a {
      text-align: center;

      img {
        display: block;
        margin-inline: auto;
        height: 3rem;
        width: auto;
        margin-bottom: var(${theme.variables.gutter});
      }
    }
  }
`;

type Props = {
  softwareReferences: Queries.IndexPageQuery['softwareReferences'];
  companyReferences: Queries.IndexPageQuery['companyReferences'];
};

export function ReferencesSection({ softwareReferences, companyReferences }: Props) {
  const theme = useTheme();

  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={sectionStyle}>
      <div className="software-references">
        {softwareReferences.nodes.map((reference, i) => (
          <div className="reference-box" key={reference.frontmatter?.title || i}>
            <img src={reference.frontmatter?.icon?.publicURL ?? ''} alt={reference.frontmatter?.title ?? ''} />
            <h3>{reference.frontmatter?.title}</h3>
            <Markup content={reference.body} />
          </div>
        ))}
      </div>

      <div className="company-references">
        {companyReferences.nodes.map((reference, i) => (
          <a href={reference.frontmatter?.link ?? ''} target="_blank" key={reference.frontmatter?.title || i} rel="noreferrer">
            <img src={reference.frontmatter?.logo?.publicURL ?? ''} alt={reference.body?.toString()} />
            <Markup content={reference.body} />
          </a>
        ))}
      </div>
    </DividedSection>
  );
}
