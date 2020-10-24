import { Link } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export type LanguageSwitcherProps = {
  paths?: { language: string; path: string }[];
};

export function LanguageSwitcher({ paths }: LanguageSwitcherProps) {
  if (!paths) {
    return null;
  }
  return (
    <ul>
      {paths.map((p) => {
        return (
          <li key={p.language}>
            <Link to={p.path}>
              <FormattedMessage id={p.language} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
