import { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { css, Theme, useTheme } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Markup } from 'interweave';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { DividedSection } from '../components/DividedSection';
import { Sprite } from '../components/Sprite';
import { Arrow } from '../components/Arrow';

const sectionStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;

  button {
    &:first-of-type {
      margin-right: var(${theme.variables.gutter});
    }

    &:last-of-type {
      margin-left: var(${theme.variables.gutter});
    }

    svg {
      width: 1.5rem;
      height: auto;
    }
  }

  .slider-content {
    display: flex;
    flex: 1;
    min-width: 0;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-block: auto;
    width: 30%;
    z-index: 1;
    text-shadow: 0 0 3px ${theme.backgroundColor};
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    .slider-content {
      flex-direction: column-reverse;
    }

    aside {
      width: 100%;
      margin-top: -4rem;
    }
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  width: calc(70% + 10rem);
  mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 1) 50%, transparent);
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
    height: clamp(20rem, 30vw, 30rem);
    width: clamp(20rem, 30vw, 30rem);

    &:nth-child(2),
    &:nth-child(5) {
      svg {
        margin-left: calc(clamp(20rem, 30vw, 30rem) * -1);
      }
    }

    &:nth-child(3),
    &:nth-child(6) {
      svg {
        margin-left: calc(clamp(20rem, 30vw, 30rem) * -2);
      }
    }
  }

  svg {
    height: 100%;
  }
`;

type Props = {
  values: Queries.IndexPageQuery['values'];
};

export function ValuesSection({ values }: Props) {
  const theme = useTheme();

  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, rootNode: emblaRoot => emblaRoot.parentElement }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const { formatMessage } = useIntl();

  const [selectedSnap, setSelectedSnap] = useState(0);

  const textBoxContents: { title?: string | null; link?: string | null; text?: JSX.Element }[] = values.nodes.map(node => ({
    title: node.frontmatter?.title,
    link: node.frontmatter?.link,
    text: <Markup content={node.html} />,
  }));
  emblaApi?.scrollSnapList();

  emblaApi?.on('select', () => {
    const currentSnap = emblaApi?.selectedScrollSnap();
    if (!Number.isNaN(currentSnap)) {
      setSelectedSnap(currentSnap % 3 ?? 0);
    }
  });

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      <button type="button" onClick={() => emblaApi?.scrollPrev()}>
        <Arrow rotation={90} />
      </button>
      <div className="slider-content">
        <aside>
          <h2>{textBoxContents[selectedSnap]?.title}</h2>
          {textBoxContents[selectedSnap]?.text}
          <LocalizedLink to={textBoxContents[selectedSnap].link ?? ''}>
            {formatMessage({ id: 'action.learnMore' })} <Arrow rotation={270} />
          </LocalizedLink>
        </aside>

        <div css={carouselStyle} ref={emblaRef}>
          <div className="carousel-container">
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
            <div className="carousel-slide">
              <Sprite name="illustration" />
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => emblaApi?.scrollNext()}>
        <Arrow rotation={270} />
      </button>
    </DividedSection>
  );
}
