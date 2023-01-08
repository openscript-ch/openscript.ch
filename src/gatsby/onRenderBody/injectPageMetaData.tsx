import { RenderBodyArgs } from 'gatsby';

export async function InjectPageMetaData({ loadPageDataSync, pathname, setHeadComponents }: RenderBodyArgs) {
  // loadPageDataSync is not implemented in all run modes like development
  // https://github.com/gatsbyjs/gatsby/issues/36675
  if (!loadPageDataSync) {
    return;
  }

  const {
    result: { pageContext },
  } = loadPageDataSync(pathname) as { result: { pageContext: Queries.SitePageContext } };

  setHeadComponents([
    <title key="pageTitle">{pageContext.metaData?.title}</title>,
    <meta key="pageDescription" name="description" content={pageContext.metaData?.description} />,
  ]);
}
