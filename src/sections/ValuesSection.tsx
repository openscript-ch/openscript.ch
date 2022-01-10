import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { DividedSection } from '../components/DividedSection';
import { ReactComponent as IllustrationGraphic } from '../../content/statics/illustration.svg';
import useEmblaCarousel from 'embla-carousel-react';
import { IndexPageQuery } from '../../graphql-types';
import { Markup } from 'interweave';

const sectionStyle = css`
  display: flex;
  align-items: center;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    z-index: 1;
  }
`;

const carouselStyle = css`
  overflow: hidden;
  width: calc(70% + 10rem);
  mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 1) 20%, transparent);
  margin-left: -10rem;

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
    </DividedSection>
  );
}
