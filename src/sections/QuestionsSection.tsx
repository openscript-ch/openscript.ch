import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';

const sectionStyle = (theme: Theme) => css``;

type Props = {
  questions: IndexPageQuery['questions'];
};

export function QuestionsSection({ questions }: Props) {
  return (
    <section css={sectionStyle}>
      {questions.nodes.map(q => (
        <div>
          <h2>{q.frontmatter?.title}</h2>
          <blockquote>
            <Markup content={q.html} />
          </blockquote>
          <span>{q.frontmatter?.answeredBy}</span>
        </div>
      ))}
    </section>
  );
}
