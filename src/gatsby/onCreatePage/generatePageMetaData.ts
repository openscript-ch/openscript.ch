import { CreatePageArgs, Reporter } from 'gatsby';
import deCHMessages from '../../../content/i18n/de-CH.json';
import enUSMessages from '../../../content/i18n/en-US.json';

const BLACK_LIST = ['dev-404-page'];

function getMessages(locale?: string | null) {
  switch (locale) {
    case 'de-CH':
      return deCHMessages;
    case 'en-US':
      return enUSMessages;
    default:
      return undefined;
  }
}

function getMessageFromMessages(messages: Record<string, string>, key: string, reporter: Reporter) {
  if (key in messages) {
    return messages[key];
  }
  reporter.warn(`Missing key ${key} in messages.`);
  return undefined;
}

function createPageTitle(siteTitle: string, pageTitle?: string) {
  return pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle;
}

export async function generatePageMetaData({ actions, page, reporter }: CreatePageArgs<Queries.SitePageContext>) {
  const { createPage, deletePage } = actions;
  if (!page.context || !page.isCreatedByStatefulCreatePages) {
    return;
  }

  const { localePagesId } = page.context;
  if (!localePagesId || BLACK_LIST.includes(localePagesId)) {
    return;
  }
  const messages = getMessages(page.context.locale);
  if (!messages) {
    reporter.warn(`Page context locale is null or couldn't find locale ${page.context.locale}.`);
    return;
  }

  const siteTitle = getMessageFromMessages(messages, `site.meta.title`, reporter);
  const pageTitle = getMessageFromMessages(messages, `page.${localePagesId}.meta.title`, reporter);

  if (!siteTitle) {
    return;
  }

  const metaData = {
    title: createPageTitle(siteTitle, pageTitle),
    description: getMessageFromMessages(messages, `page.${localePagesId}.meta.description`, reporter),
  };

  deletePage(page);
  createPage({ ...page, context: { ...page.context, metaData } });
}
