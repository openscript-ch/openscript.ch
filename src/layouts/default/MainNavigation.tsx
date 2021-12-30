import { css, Theme } from '@emotion/react';
import { LocalizedLink } from '../../../plugins/gatsby-plugin-i18n-l10n';

const navStyle = (theme: Theme) => css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
  }
`;

export default function MainNavigation() {
  return (
    <nav css={navStyle}>
      <ul>
        <li>
          <LocalizedLink to="/pages">Joho</LocalizedLink>
        </li>
      </ul>
    </nav>
  );
}
