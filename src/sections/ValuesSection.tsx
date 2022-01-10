import { css, Theme, useTheme } from '@emotion/react';
import { useState } from 'react';
import { DividedSection } from '../components/DividedSection';
import { ReactComponent as IllustrationGraphic } from '../../content/statics/illustration.svg';
import useEmblaCarousel from 'embla-carousel-react';
import { IndexPageQuery } from '../../graphql-types';
import { Markup } from 'interweave';
import { Arrow } from '../layouts/default/Arrow';

const sectionStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    &:first-child {
      margin-right: 2rem;
    }

    &:last-child {
      margin-left: 2rem;
    }

    svg {
      width: 1.5rem;
      height: auto;
    }
  }

  .slider-content {
    display: flex;
    min-width: 0;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-block: auto;
    width: 30%;
    z-index: 1;
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    .slider-content {
      flex-direction: column-reverse;
    }

    aside {
      width: 100%;
      margin-top: -6rem;
    }
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  width: calc(70% + 10rem);
  mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 1) 20%, transparent);
  margin-left: -10rem;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    width: 100%;
    margin: 0;
  }

  .carousel-container {
    display: flex;
  }

  .carousel-slide {
    position: relative;
    display: flex;
  }

  svg {
    height: 30rem;
  }
`;

type Props = {
  values: IndexPageQuery['values'];
};

export function ValuesSection({ values }: Props) {
  const theme = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedSnap, setSelectedSnap] = useState(0);

  const textBoxContents: { title?: string | null; text?: JSX.Element }[] = values.nodes.map(node => ({
    title: node.frontmatter?.title,
    text: <Markup content={node.html} />,
  }));
  emblaApi?.scrollSnapList();

  emblaApi?.on('select', () => {
    setSelectedSnap(emblaApi?.selectedScrollSnap() % 3 ?? 0);
  });

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      <button onClick={() => emblaApi?.scrollPrev()}>
        <Arrow rotation={90} />
      </button>
      <div className="slider-content">
        <aside>
          <h2>{textBoxContents[selectedSnap]?.title}</h2>
          {textBoxContents[selectedSnap]?.text}
        </aside>

        <div css={carouselStyle} ref={emblaRef}>
          <div className="carousel-container">
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="0 0 1077.833333333 1080" />
            </div>
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="1077.833333333 0 1077.833333333 1080" />
            </div>
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="2155.666666666 0 1077.833333333 1080" />
            </div>
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="0 0 1077.833333333 1080" />
            </div>
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="1077.833333333 0 1077.833333333 1080" />
            </div>
            <div className="carousel-slide">
              <IllustrationGraphic viewBox="2155.666666666 0 1077.833333333 1080" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => emblaApi?.scrollNext()}>
        <Arrow rotation={270} />
      </button>
    </DividedSection>
  );
}
