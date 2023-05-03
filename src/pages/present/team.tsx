import { graphql, HeadProps, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { FormattedMessage } from 'react-intl';
import { css, Theme, useTheme } from '@emotion/react';
import { SummaryParagraph } from '../../components/SummaryParagraph';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { ContentMain } from '../../layouts/default/types/ContentMain';
import { DividedSection } from '../../components/DividedSection';

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

const peopleSectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  flex-grow: 1;
`;

function PeopleSection() {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={peopleSectionStyle}>
      <h2>
        <FormattedMessage id="page.present.team.section.portraits" />
      </h2>
    </DividedSection>
  );
}

function JoinUsSection() {
  return (
    <section>
      <h2>
        <FormattedMessage id="page.present.team.section.meet" />
      </h2>
    </section>
  );
}

export default function TeamPage({ data }: PageProps<Queries.TeamPageQuery>) {
  return (
    <DefaultLayout CustomMain={ContentMain}>
      <TeamHeader summary={data.summary?.html} />
      <PeopleSection />
      <JoinUsSection />
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
  }
`;
