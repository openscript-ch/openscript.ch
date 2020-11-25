import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { ImprintPageQuery } from '../../graphql-types';

type ImprintPageProps = { data: ImprintPageQuery; pageContext: SitePageContext };

export default function ImprintPage({ data, pageContext }: ImprintPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.imprint.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <section dangerouslySetInnerHTML={{ __html: data.imprint.html }}></section>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ImprintPage($language: String) {
    imprint: markdownRemark(fields: { language: { eq: $language }, kind: { eq: "blocks" }, filename: { glob: "*imprint*" } }) {
      html
    }
  }
`;
