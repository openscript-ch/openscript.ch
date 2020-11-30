import styled from '@emotion/styled';
import { useEmblaCarousel } from 'embla-carousel/react';
import React, { useCallback, useEffect, useRef } from 'react';

const Viewport = styled.section`
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Slide = styled.div`
  position: relative;
  height: 100%;
`;

export type TickerProps = {
  className?: string;
  slides: JSX.Element[];
  speed?: number;
  copy?: number;
};

export function Ticker({ className, slides, speed, copy = 1 }: TickerProps) {
  const [tickerRef, ticker] = useEmblaCarousel({ loop: true, dragFree: true, containScroll: 'trimSnaps' });
  const animationRef = useRef(0);
  const currentSpeed = speed || -0.1;

  const animate = useCallback(() => {
    if (!ticker || !animationRef.current) {
      return;
    }
    const engine = ticker.dangerouslyGetEngine();
    engine.location.add(currentSpeed);
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
    if (slides.length > 0 && ticker?.dangerouslyGetEngine().slideLooper.canLoop()) {
      ticker?.on('pointerDown', stopAutoScrolling);
      ticker?.on('pointerUp', () => ticker.clickAllowed() && startAutoScrolling());
      ticker?.on('settle', startAutoScrolling);
      startAutoScrolling();
    }
  }, [ticker, startAutoScrolling, stopAutoScrolling, slides]);

  const currentSlides = [...Array(copy)].map(() => slides).flat();

  return (
    <Viewport className={className} ref={tickerRef}>
      <Container>
        {currentSlides.map((s, i) => {
          return <Slide key={i}>{s}</Slide>;
        })}
      </Container>
    </Viewport>
  );
}
