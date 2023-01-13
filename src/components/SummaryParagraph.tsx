import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const summaryParagraphStyle = css`
  font-size: 1.3em;
  width: 60%;
  margin: 0 auto;
`;

type SummaryParagraphProps = PropsWithChildren<{}>;

export function SummaryParagraph({ children }: SummaryParagraphProps) {
  return <p css={summaryParagraphStyle}>{children}</p>;
}
