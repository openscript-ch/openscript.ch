import { GatsbyNode } from 'gatsby';
import { CreateGenericPages } from './src/gatsby/createPages/createGenericPages';

const node: GatsbyNode = {
  createPages: async args => {
    await CreateGenericPages(args);
  },
  onCreateNode: async args => {},
};

export default node;
