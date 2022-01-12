import { Theme } from '@emotion/react';

export const flattenObject = (input: Record<string, any>) => {
  const flattened: Record<string, any> = {};

  Object.keys(input).forEach(key => {
    if (typeof input[key] === 'object' && input[key] !== null) {
      Object.assign(flattened, flattenObject(input[key]));
    } else {
      flattened[key] = input[key];
    }
  });

  return flattened;
};

export const convertThemeToCSSVariables = ({ variables, ...theme }: Theme) => {
  const flattenedTheme = flattenObject(theme);
  const flattenedVariables = flattenObject(variables);
  const returnValue: string[] = [];
  for (const [key, value] of Object.entries(flattenedTheme)) {
    returnValue.push(`${flattenedVariables[key]}: ${value};`);
  }
  return returnValue;
};
