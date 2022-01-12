import { Theme } from '@emotion/react';
import { decamelize } from 'fast-case';

const flatten = (obj: Record<string, any>): Record<string, any> => {
  const result: any = {};

  const transform = (wrapper: any, p?: string) => {
    switch (typeof wrapper) {
      case 'object':
        p = p ? p + '-' : '';
        for (const item in wrapper) {
          transform(wrapper[item], p + item);
        }
        break;
      default:
        if (p) {
          result[`--${decamelize(p).replaceAll('_', '-')}`] = wrapper;
        }
        break;
    }
  };

  transform(obj);

  return result;
};

export const convertThemeToCSSVariables = (input: Theme) => {
  const flattenedObject = flatten(input);
  const returnValue: string[] = [];
  for (const [key, value] of Object.entries(flattenedObject)) {
    returnValue.push(`${key}: ${value};`);
  }
  return returnValue;
};
