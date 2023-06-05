import { css, Theme, useTheme } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Markup } from 'interweave';
import { FormattedMessage } from 'react-intl';
import { DividedSection } from '../../components/DividedSection';
import { SummaryParagraph } from '../../components/SummaryParagraph';
import { Document } from '../../layouts/default/Document';
import { ContentMain } from '../../layouts/default/types/ContentMain';
import { DefaultLayout } from '../../layouts/DefaultLayout';

function TeamHeader({ summary }: { summary?: string | null }) {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor}>
      <h1>
        <FormattedMessage id="page.present.team.meta.title" />
      </h1>
      <SummaryParagraph>
        <Markup content={summary} />
      </SummaryParagraph>
    </DividedSection>
  );
}

const portraitsSectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  flex-grow: 1;

  #team-portraits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    max-width: 100%;

    @media (max-width: ${theme.breakpoints.small}) {
      grid-template-columns: 1fr 1fr;
    }

    .portrait {
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 100%;
      }

      p {
        margin-top: 0.5rem;
        text-align: center;
      }
    }
  }
`;

function PortraitsSection({ portraits }: { portraits: Queries.TeamPageQuery['portraits']['nodes'] }) {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={portraitsSectionStyle}>
      <h2>
        <FormattedMessage id="page.present.team.section.portraits" />
      </h2>
      <div id="team-portraits">
        {portraits.map(portrait => {
          if (!portrait.frontmatter || !portrait.frontmatter.name || !portrait.frontmatter.avatar?.publicURL) {
            return undefined;
          }
          return (
            <div className="portrait">
              <img src={portrait.frontmatter.avatar.publicURL} alt={portrait.frontmatter.name} />
              <p>{portrait.frontmatter.name}</p>
            </div>
          );
        })}
      </div>
    </DividedSection>
  );
}

const impressionsSectionStyle = (theme: Theme) => css`
  #team-impressions {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${theme.breakpoints.small}) {
      grid-template-columns: 1fr;
    }

    & > * {
      filter: grayscale(1) brightness(1.2) opacity(0.5);
      transition: 0.3s;

      &:hover {
        filter: none;
      }
    }
  }
`;

function ImpressionsSection({ impressions }: { impressions: Queries.TeamPageQuery['impressions']['nodes'] }) {
  return (
    <section css={impressionsSectionStyle}>
      <h2>
        <FormattedMessage id="page.present.team.section.impressions" />
      </h2>
      <div id="team-impressions">
        {impressions.map(impression => {
          if (!impression.frontmatter?.image) {
            return undefined;
          }
          const image = getImage(impression.frontmatter?.image.childImageSharp);
          if (!image) {
            return undefined;
          }
          return <GatsbyImage image={image} alt="" />;
        })}
      </div>
    </section>
  );
}

export default function TeamPage({ data }: PageProps<Queries.TeamPageQuery>) {
  return (
    <DefaultLayout CustomMain={ContentMain}>
      <TeamHeader summary={data.summary?.html} />
      <PortraitsSection portraits={data.portraits.nodes} />
      <ImpressionsSection impressions={data.impressions.nodes} />
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}

export const query = graphql`
  query TeamPage($locale: String) {
    summary: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections/summaries" }, filename: { glob: "*team*" } }) {
      html
    }
    portraits: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "sections/portraits" } } }) {
      nodes {
        fields {
          kind
        }
        frontmatter {
          avatar {
            publicURL
          }
          name
        }
      }
    }
    impressions: allMarkdownRemark(filter: { fields: { locale: { eq: $locale }, kind: { eq: "galleries/team" } } }) {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 640)
            }
          }
        }
      }
    }
  }
`;
