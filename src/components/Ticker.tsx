import styled from '@emotion/styled';
import { useEmblaCarousel } from 'embla-carousel/react';
import React, { useCallback, useEffect, useRef } from 'react';

const Viewport = styled.section`
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
`;

const Slide = styled.div`
  position: relative;
`;

export type TickerProps = {
  slides: JSX.Element[];
};

export function Ticker({ slides }: TickerProps) {
  const [tickerRef, ticker] = useEmblaCarousel({ loop: true, dragFree: true, containScroll: 'trimSnaps' });
  const animationRef = useRef(0);

  const animate = useCallback(() => {
    if (!ticker || !animationRef.current) {
      return;
    }
    const engine = ticker.dangerouslyGetEngine();
    engine.location.add(-0.1);
    engine.target.set(engine.location);
    engine.scrollLooper.loop([engine.location, engine.target], -1);
    engine.slideLooper.loop(ticker.slideNodes());
    engine.translate.to(engine.location);
    animationRef.current = requestAnimationFrame(animate);
  }, [ticker]);

  const startAutoScrolling = useCallback(() => {
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAutoScrolling = useCallback(() => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = 0;
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      ticker?.on('pointerDown', stopAutoScrolling);
      ticker?.on('pointerUp', () => ticker.clickAllowed() && startAutoScrolling());
      ticker?.on('settle', startAutoScrolling);
      startAutoScrolling();
    }
  }, [ticker, startAutoScrolling, stopAutoScrolling, slides]);

  return (
    <Viewport ref={tickerRef}>
      <Container>
        {slides.map((s, i) => {
          return <Slide key={i}>{s}</Slide>;
        })}
      </Container>
    </Viewport>
  );
}
