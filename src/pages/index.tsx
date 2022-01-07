import { graphql, PageProps } from 'gatsby';
import { Markup } from 'interweave';
import { IndexPageQuery } from '../../graphql-types';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';
import { ReactComponent as Illustration } from '../../content/statics/illustration.svg';
import useEmblaCarousel from 'embla-carousel-react';
import styled from '@emotion/styled';
import React from 'react';

const SectionWrapper = styled.div`
  position: relative;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const TextBox = styled.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

const GradientOverlay = styled.span`
  position: absolute;
  inset: -10rem 0;
  background: radial-gradient(transparent, ${props => props.theme.backgroundColor} 45%);
  pointer-events: none;
  z-index: 1;
`;

const OverflowContainer = styled.div``;

const SlidesContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;

  > div {
    overflow: visible;
    min-width: calc(100% / 3);

    svg {
      min-width: 300%;
      height: auto;
    }
  }
`;

export default function IndexPage({ data }: PageProps<IndexPageQuery, SitePageContext>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });

  const [selectedSnap, setSelectedSnap] = React.useState(0);

  const textBoxContents: { title: string; text: string }[] = [
    {
      title: 'Title 1',
      text: 'asdklfskfjsd flkjs fdlskjf sdlfjsd flskj lkfj alfkjdsa flkjdsaflsdjf sdlkfj ',
    },
    {
      title: 'Title 2',
      text: 'asdfopsfpodifimsfsdaöfjdsf lkdsf dsfj sdflkjsd flkdsj flsdjfj ',
    },
    {
      title: 'Title 3',
      text: 'öaslfkjs fsjf sdkfjs dflkjsd flksdjfsldafkjd lk asdfasdfdsfdsfsdafsadf ',
    },
  ];

  emblaApi?.on('select', () => {
    setSelectedSnap(emblaApi?.selectedScrollSnap() ?? 0);
  });

  return (
    <DefaultLayout>
      <Markup content={data.slogans?.html} />
      <SectionWrapper>
        <TextBox className={selectedSnap === 2 ? 'right' : ''}>
          <h2>{textBoxContents[selectedSnap]?.title}</h2>
          <p>{textBoxContents[selectedSnap]?.text}</p>
        </TextBox>
        <SliderContainer>
          <GradientOverlay />
          <OverflowContainer ref={emblaRef}>
            <SlidesContainer>
              <div>
                <Illustration />
              </div>
              <div></div>
              <div></div>
            </SlidesContainer>
          </OverflowContainer>
        </SliderContainer>
      </SectionWrapper>
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($locale: String) {
    slogans: markdownRemark(fields: { locale: { eq: $locale }, kind: { eq: "sections" }, filename: { glob: "*slogan*" } }) {
      html
    }
  }
`;
