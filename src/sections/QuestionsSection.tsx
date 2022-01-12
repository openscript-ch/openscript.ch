import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { useRef } from 'react';
import { IndexPageQuery } from '../../graphql-types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Arrow } from '../layouts/default/Arrow';
import { useIntl } from 'react-intl';

const sectionStyle = (theme: Theme) => css`
  .navigation-row {
    display: flex;
    gap: var(${theme.variables.gutter});

    > div {
      flex: 1;

      button {
        margin-left: auto;
      }

      &:first-child {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  height: 100%;
  display: flex;

  .carousel-container {
    height: 20rem;
    margin-inline: auto;
  }

  .carousel-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

    position: relative;

    &::before,
    &::after {
      content: '"';
      position: absolute;
      font-size: 4rem;
      color: ${theme.secondaryColor};
    }

    &::before {
      inset: 0 auto auto 0;
    }

    &::after {
      inset: auto 0 0 auto;
    }

    h2 {
      text-align: center;
    }

    blockquote {
      margin-bottom: 1rem;
    }
  }
`;

type Props = {
  questions: IndexPageQuery['questions'];
};

export function QuestionsSection({ questions }: Props) {
  const { formatMessage } = useIntl();

  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false }, emblaRoot => emblaRoot.parentElement));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' }, [autoplay.current]);

  return (
    <section css={sectionStyle}>
      <div css={carouselStyle} ref={emblaRef}>
        <div className="carousel-container">
          {questions.nodes.map(q => (
            <div className="carousel-slide">
              <h2>{q.frontmatter?.title}</h2>
              <blockquote>
                <Markup content={q.html} />
              </blockquote>
              <span className="author">&mdash; {q.frontmatter?.answeredBy}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation-row">
        <div>
          <button onClick={() => emblaApi?.scrollPrev()}>
            <Arrow rotation={180} /> {formatMessage({ id: 'action.previous' })}
          </button>
        </div>
        |
        <div>
          <button onClick={() => emblaApi?.scrollNext()}>
            {formatMessage({ id: 'action.next' })} <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
