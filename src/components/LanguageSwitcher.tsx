import { Link } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export type LanguageSwitcherProps = {
  paths?: { [key: string]: string };
};

export function LanguageSwitcher({ paths }: LanguageSwitcherProps) {
  if (!paths) {
    return null;
  }
  return (
    <ul>
      {Object.keys(paths).map((language) => {
        return (
          <li>
            <Link to={paths[language]}>
              <FormattedMessage id={language} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
