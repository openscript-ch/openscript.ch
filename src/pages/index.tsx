import { PageProps } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { LanguageSwitcher, LanguageSwitcherProps } from '../components/LanguageSwitcher';

export default function IndexPage({ pageContext }: PageProps<never, SitePageContext>) {
  return (
    <div>
      <LanguageSwitcher paths={pageContext.alternativeLanguagePaths as LanguageSwitcherProps['paths']} />
      <FormattedMessage id="meta.hello" />
    </div>
  );
}
