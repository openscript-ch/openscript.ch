import { css, Theme, useTheme } from '@emotion/react';
import { graphql, HeadProps } from 'gatsby';
import { useIntl } from 'react-intl';
import { DividedSection } from '../components/DividedSection';
import { ForwardBackwardSections } from '../components/ForwardBackwardSections';
import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

const contentSectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  flex-grow: 1;
`;

function ContentSection() {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={contentSectionStyle}>
      Eine Baustelle.. sag ich ja.
    </DividedSection>
  );
}

export default function FuturePage() {
  const intl = useIntl();
  return (
    <DefaultLayout>
      <ForwardBackwardSections
        forward={{ path: '/', message: intl.formatMessage({ id: 'menu.togetherAhead' }) }}
        backward={{ path: '/present', message: intl.formatMessage({ id: 'menu.toThePresent' }) }}
      >
        <ContentSection />
      </ForwardBackwardSections>
    </DefaultLayout>
  );
}

// PageTitle: t(`page.future.title`)
// PageDescription: t(`page.future.description`)
export function Head({ data }: HeadProps<Queries.FuturePageQuery>) {
  return <Document title={data.pageTitle?.message} description={data.pageDescription?.message} />;
}

export const query = graphql`
  query FuturePage($locale: String) {
    pageTitle: translation(locale: { eq: $locale }, key: { eq: "page.future.title" }) {
      message
    }
    pageDescription: translation(locale: { eq: $locale }, key: { eq: "page.future.description" }) {
      message
    }
  }
`;
