import { graphql, HeadProps, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { FormattedMessage } from 'react-intl';
import { SummaryParagraph } from '../../components/SummaryParagraph';
import { Document } from '../../layouts/default/Document';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function TeamPage({ data }: PageProps<Queries.TeamPageQuery>) {
  return (
    <DefaultLayout>
      <section>
        <h1>
          <FormattedMessage id="page.present.team.meta.title" />
        </h1>
        <SummaryParagraph>
          <Markup content={data.summary?.html} />
        </SummaryParagraph>
      </section>
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
