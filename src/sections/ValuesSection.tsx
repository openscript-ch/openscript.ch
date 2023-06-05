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
    margin-block: auto;
    width: 30%;
    z-index: 1;

    .aside-content {
      flex: 1;
    }

    button {
      display: none;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    button {
      display: none;
    }

    .slider-content {
      flex-direction: column-reverse;
      margin: 0 calc(-1 * var(${theme.variables.gutter}));
    }

    aside {
      width: 100%;
      margin: 0;

      button {
        display: block;
        margin-inline: var(${theme.variables.gutter});
      }
    }
  }
`;

const carouselStyle = (theme: Theme) => css`
  overflow: hidden;
  width: calc(70% + 10rem);
  mask-image: linear-gradient(90deg, transparent 0%, black 40%, black 50%, black 60%, transparent 100%);
  margin-left: -10rem;
  /* magic formula to responsively fit underneath header */
  margin-top: calc(-1 * (6rem + 2vw));
  margin-bottom: calc(-1 * (5rem + 2vw));

  .carousel-container {
    display: flex;

    .carousel-slide {
      --slide-frame-size: clamp(25rem, 60vw, 50rem);
      height: var(--slide-frame-size);
      width: var(--slide-frame-size);
      flex: 0 0 auto;
      overflow: hidden;
      display: flex;

      svg {
        height: 100%;
        flex: 1;
      }

      &:nth-child(2),
      &:nth-child(5) {
        svg {
          margin-left: calc(var(--slide-frame-size) * -1);
        }
      }

      &:nth-child(3),
      &:nth-child(6) {
        svg {
          margin-left: calc(var(--slide-frame-size) * -2);
        }
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    width: 100%;
    margin-left: 0;
    mask-image: linear-gradient(black, black, transparent);
    margin-top: calc(-1 * (5.85rem + 3vw));
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

  const renderPrevButton = () => (
    <button type="button" onClick={() => emblaApi?.scrollPrev()}>
      <Arrow rotation={90} />
    </button>
  );

  const renderNextButton = () => (
    <button type="button" onClick={() => emblaApi?.scrollNext()}>
      <Arrow rotation={270} />
    </button>
  );

  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={sectionStyle}>
      {renderPrevButton()}
      <div className="slider-content">
        <aside>
          {renderPrevButton()}
          <div className="aside-content">
            <h2>{textBoxContents[selectedSnap]?.title}</h2>
            {textBoxContents[selectedSnap]?.text}
            <LocalizedLink to={textBoxContents[selectedSnap].link ?? ''}>
              {formatMessage({ id: 'action.learnMore' })} <Arrow rotation={270} />
            </LocalizedLink>
          </div>
          {renderNextButton()}
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
      {renderNextButton()}
    </DividedSection>
  );
}
