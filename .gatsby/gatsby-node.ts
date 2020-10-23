import { ITSConfigFn } from 'gatsby-plugin-ts-config';

const node: ITSConfigFn<'node'> = () => ({
  onCreatePage: async ({ page, actions }) => {
    // To be configured
  }
});

export default node;
