import { css, useTheme } from '@emotion/react';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from '../../plugins/gatsby-plugin-i18n-l10n';
import { DividedSection } from '../components/DividedSection';
import { Arrow } from '../layouts/default/Arrow';
import { DefaultLayout } from '../layouts/DefaultLayout';

const navigationSectionStyle = css`
  display: flex;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
  }

  svg {
    height: 2rem;
    width: auto;
  }
`;

export default function ReferencesPage() {
  const theme = useTheme();
  return (
    <DefaultLayout>
      <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={navigationSectionStyle}>
        <LocalizedLink to="/present">
          <Arrow rotation={180} />
          <FormattedMessage id="menu.toThePresent" />
        </LocalizedLink>
      </DividedSection>
    </DefaultLayout>
  );
}
