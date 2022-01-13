import { GatsbyBrowser, GatsbySSR, PluginOptions } from 'gatsby';

export type Translation = {
  locale: string;
  path: string;
};

export type SitePageContext = {
  translations?: Translation[];
  locale?: Maybe<Scalars['String']>;
};

type AlternativeLanguagePath = {
  locale?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

type GatsbyBrowserWrapPageElementParams = Parameters<GatsbyBrowser['wrapPageElement']>;
type GatsbySSRWrapPageElementParams = Parameters<GatsbySSR['wrapPageElement']>;
type GatsbyBrowserWrapPageElementReturnType = ReturnType<GatsbyBrowser['wrapPageElement']>;
type GatsbySSRWrapPageElementReturnType = ReturnType<GatsbySSR['wrapPageElement']>;
export type WrapPageElement = (
  args: GatsbyBrowserWrapPageElementParams[0] | GatsbySSRWrapPageElementParams[0],
  options: PluginOptions
) => GatsbyBrowserWrapPageElementReturnType | GatsbySSRWrapPageElementReturnType;
