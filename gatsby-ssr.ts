import { GatsbySSR } from 'gatsby';
import { InjectPageMetaData } from './src/gatsby/onRenderBody/injectPageMetaData';

export const onRenderBody: GatsbySSR['onRenderBody'] = async args => {
  await InjectPageMetaData(args);
};
