import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Arrow } from '../components/Arrow';

const sectionStyle = () => css`
  display: flex;

  button svg {
    height: 1.5rem;
    width: auto;
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  flex: 1;
  mask-image: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);

  .carousel-container {
    display: flex;
  }

  .carousel-slide {
    flex: 0 0 100%;
    padding-inline: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      text-align: center;
    }

    blockquote {
      margin: calc(var(${theme.variables.gutter}) * 1.5) 0;
      position: relative;
      max-width: 80%;

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

  @media (max-width: ${theme.breakpoints.small}) {
    mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
    .carousel-slide {
      padding-inline: 5%;
    }
  }
`;

type Props = {
  questions: Queries.IndexPageQuery['questions'];
};

export function QuestionsSection({ questions }: Props) {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false, rootNode: emblaRoot => emblaRoot.parentElement }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section css={sectionStyle}>
      <button type="button" onClick={() => emblaApi?.scrollPrev()}>
        <Arrow rotation={90} />
      </button>
      <div css={carouselStyle} ref={emblaRef}>
        <div className="carousel-container">
          {questions.nodes.map((q, i) => (
            <div className="carousel-slide" key={q.frontmatter?.title || i}>
              <h3>{q.frontmatter?.title}</h3>
              <blockquote>
                <Markup content={q.html} />
              </blockquote>
              <span className="author">&mdash; {q.frontmatter?.answeredBy}</span>
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => emblaApi?.scrollNext()}>
        <Arrow rotation={270} />
      </button>
    </section>
  );
}
