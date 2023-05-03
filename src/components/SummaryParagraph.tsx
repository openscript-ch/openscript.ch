import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const summaryParagraphStyle = css`
  font-size: 1.3em;
  margin: 0 auto;
  line-height: 1.66;
`;

type SummaryParagraphProps = PropsWithChildren<{}>;

export function SummaryParagraph({ children }: SummaryParagraphProps) {
  return <p css={summaryParagraphStyle}>{children}</p>;
}
