import { css, Theme, useTheme } from '@emotion/react';
import { HeadProps } from 'gatsby';
import { FormattedMessage, useIntl } from 'react-intl';
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
      <h2>
        <FormattedMessage id="page.present.meta.title" />
      </h2>
    </DividedSection>
  );
}

export default function PresentPage() {
  const intl = useIntl();
  return (
    <DefaultLayout>
      <ForwardBackwardSections
        forward={{ path: '/future', message: intl.formatMessage({ id: 'menu.toTheFuture' }) }}
        backward={{ path: '/past', message: intl.formatMessage({ id: 'menu.toThePast' }) }}
      >
        <ContentSection />
      </ForwardBackwardSections>
    </DefaultLayout>
  );
}

export function Head({ pageContext }: HeadProps<object, Queries.SitePageContext>) {
  return <Document metaData={pageContext.metaData} />;
}
