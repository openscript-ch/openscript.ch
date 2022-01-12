import { css, Theme } from '@emotion/react';
import { Markup } from 'interweave';
import { useRef } from 'react';
import { IndexPageQuery } from '../../graphql-types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const sectionStyle = (theme: Theme) => css``;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  height: 100%;
  display: flex;

  .carousel-container {
  }

  .carousel-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

    h2 {
      text-align: center;
    }
  }
`;

type Props = {
  questions: IndexPageQuery['questions'];
};

export function QuestionsSection({ questions }: Props) {
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
              <span>{q.frontmatter?.answeredBy}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
