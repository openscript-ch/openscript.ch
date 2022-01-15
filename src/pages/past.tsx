import { css, Theme, useTheme } from '@emotion/react';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from '../../plugins/gatsby-plugin-i18n-l10n';
import { DividedSection } from '../components/DividedSection';
import { Arrow } from '../layouts/default/Arrow';
import { DefaultLayout } from '../layouts/DefaultLayout';

const forwardAndBackwardSectionStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  padding-top: var(${theme.variables.gutter});
  padding-bottom: var(${theme.variables.gutter});

  a {
    display: flex;
    flex-direction: column;
  }

  svg {
    margin: 1rem;
    height: 2rem;
    width: auto;
  }
`;

const contentSectionStyle = (theme: Theme) => css`
  background-color: ${theme.whiteColor};
  flex-grow: 1;
`;

function ForwardSection() {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={forwardAndBackwardSectionStyle}>
      <LocalizedLink to="/present">
        <Arrow rotation={180} />
        <FormattedMessage id="menu.toThePresent" />
      </LocalizedLink>
    </DividedSection>
  );
}

function ContentSection() {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.whiteColor} lowerColor={theme.backgroundColor} flipVertically css={contentSectionStyle}>
      Eine Baustelle.. sag ich ja.
    </DividedSection>
  );
}

function BackwardSection() {
  return (
    <section css={forwardAndBackwardSectionStyle}>
      <LocalizedLink to="/future">
        <FormattedMessage id="menu.backToTheFuture" />
        <Arrow />
      </LocalizedLink>
    </section>
  );
}

export default function ReferencesPage() {
  return (
    <DefaultLayout>
      <ForwardSection />
      <ContentSection />
      <BackwardSection />
    </DefaultLayout>
  );
}
