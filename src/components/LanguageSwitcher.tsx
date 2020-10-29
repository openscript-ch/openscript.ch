import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export type LanguageSwitcherProps = {
  paths?: { language: string; path: string }[];
};

export function LanguageSwitcher({ paths }: LanguageSwitcherProps) {
  if (!paths) {
    return null;
  }
  return (
    <StyledList>
      {paths.map((p) => {
        return (
          <li key={p.language}>
            <Link to={p.path}>
              <FormattedMessage id={p.language} />
            </Link>
          </li>
        );
      })}
    </StyledList>
  );
}
