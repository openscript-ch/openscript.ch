import { GatsbyNode } from 'gatsby';
import { CreateGenericPages } from './src/gatsby/createPages/createGenericPages';
import { customizeSitePageContext } from './src/gatsby/createSchemaCustomization/customizeSitePageContext';
import { generatePageMetaData } from './src/gatsby/onCreatePage/generatePageMetaData';

export const createPages: GatsbyNode['createPages'] = async args => {
  await CreateGenericPages(args);
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async args => {
  customizeSitePageContext(args);
};

export const onCreatePage: GatsbyNode<Record<string, unknown>, Queries.SitePageContext>['onCreatePage'] = async args => {
  await generatePageMetaData(args);
};
