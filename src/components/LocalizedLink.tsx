import { Link } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';

type LocalizedLinkProps = React.PropsWithChildren<{
  to: string;
}>;

export function LocalizedLink({ to, children }: LocalizedLinkProps) {
  const intl = useIntl();
  const localizedPath = to !== '/' ? intl.formatMessage({ id: to }) : '/';
  const prefixedPath = intl.defaultLocale === intl.locale ? localizedPath : `/${intl.locale}${localizedPath}`;
  return <Link to={prefixedPath}>{children}</Link>;
}
