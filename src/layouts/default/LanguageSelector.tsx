import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { PageContext } from '../../wrapPageElement';

const languageSelectorStyles = css`
  font-size: 1.4rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline;
      margin-left: 1rem;
    }
  }
`;

export default function LanguageSelector() {
  const pageContext = useContext(PageContext);

  return (
    <nav css={languageSelectorStyles}>
      <ul>
        {pageContext.translations?.map(p => (
          <li key={p.locale}>
            <Link to={p.path}>
              <FormattedMessage id={`languages.${p.locale}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
