import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Arrow } from '../components/Arrow';

const sectionStyle = () => css`
  display: flex;
  flex-direction: column;

  button svg {
    height: 1.5rem;
    width: auto;
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  height: 100%;
  display: flex;
  margin: var(${theme.variables.gutter}) auto;
  mask-image: linear-gradient(transparent, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, transparent);

  @media (max-width: ${theme.breakpoints.small}) {
    mask-image: linear-gradient(transparent, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent);
  }

  .carousel-container {
    height: 24rem;
  }

  .carousel-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    position: relative;

    h2 {
      text-align: center;
    }

    blockquote {
      margin: calc(var(${theme.variables.gutter}) * 1.5) 0;
      position: relative;
      max-width: 66%;

      &::before,
      &::after {
        content: '"';
        position: absolute;
        font-size: 4rem;
        color: ${theme.secondaryColor};
        margin: 0 calc(var(${theme.variables.gutter}) * -1);
      }

      &::before {
        inset: auto auto 0 0;
      }

      &::after {
        inset: 0 0 auto auto;
      }
    }
  }
`;

type Props = {
  questions: Queries.IndexPageQuery['questions'];
};

export function QuestionsSection({ questions }: Props) {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false, rootNode: emblaRoot => emblaRoot.parentElement }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' }, [autoplay.current]);

  return (
    <section css={sectionStyle}>
      <button type="button" onClick={() => emblaApi?.scrollPrev()}>
        <Arrow rotation={180} />
      </button>
      <div css={carouselStyle} ref={emblaRef}>
        <div className="carousel-container">
          {questions.nodes.map((q, i) => (
            <div className="carousel-slide" key={q.frontmatter?.title || i}>
              <h2>{q.frontmatter?.title}</h2>
              <blockquote>
                <Markup content={q.body} />
              </blockquote>
              <span className="author">&mdash; {q.frontmatter?.answeredBy}</span>
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => emblaApi?.scrollNext()}>
        <Arrow />
      </button>
    </section>
  );
}
