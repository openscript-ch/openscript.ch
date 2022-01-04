import React from "react";

export const useMatchMediaWidth = (width: string) => {
  const widthMatch = typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${width})`) : undefined;

  const [matches, setMatches] = React.useState<boolean>(!!widthMatch?.matches);

  widthMatch?.addEventListener('change', ({ matches }) => {
    setMatches(matches);
  });

  return matches;
}