import { css, Theme } from '@emotion/react';

const footerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${theme.primaryColor};
`;

type FooterProps = {
  author: string;
  version: string;
};

export function Footer({ author, version }: FooterProps) {
  return (
    <footer css={footerStyle}>
      {author} {version}
    </footer>
  );
}
