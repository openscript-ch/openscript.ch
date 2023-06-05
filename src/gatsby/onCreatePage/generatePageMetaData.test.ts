import { generatePageMetaData } from './generatePageMetaData';

const args: any = {
  actions: {},
  page: {},
  reporter: {},
};

jest.mock('../../../content/i18n/de-CH.json', () => ({}), { virtual: true });

describe('generatePageMetaData', () => {
  beforeEach(() => {
    args.actions = {
      createPage: jest.fn(),
      deletePage: jest.fn(),
    };
    args.page = {};
    args.reporter = {
      warn: jest.fn(),
    };
  });

  it('returns without page context', async () => {
    await generatePageMetaData(args);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('returns when is not a stateful created page', async () => {
    args.page = {
      context: {},
      isCreatedByStatefulCreatePages: false,
    };
    await generatePageMetaData(args);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('returns without locale pages id', async () => {
    args.page = {
      context: {},
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('returns when locale pages id is blacklisted', async () => {
    args.page = {
      context: {
        localePagesId: 'dev-404-page',
      },
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('returns with warning when there are no messages for locale', async () => {
    args.page = {
      context: {
        localePagesId: 'some.page',
      },
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.reporter.warn).toBeCalledWith(`Page context locale is null or couldn't find locale undefined.`);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('returns with warning when the key site.meta.title is not in the messages', async () => {
    args.page = {
      context: {
        localePagesId: 'index',
        locale: 'de-CH',
      },
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.reporter.warn).toBeCalledWith(`Missing key site.meta.title in messages.`);
    expect(args.actions.deletePage).not.toBeCalled();
    expect(args.actions.createPage).not.toBeCalled();
  });

  it('set the meta data with warning when the page title key is not in the messages', async () => {
    args.page = {
      context: {
        localePagesId: 'some.fictional.page',
        locale: 'en-US',
      },
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.reporter.warn).toBeCalledWith(`Missing key page.some.fictional.page.meta.title in messages.`);
    expect(args.reporter.warn).toBeCalledWith(`Missing key page.some.fictional.page.meta.description in messages.`);
    expect(args.actions.createPage).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": [
          [
            {
              "context": {
                "locale": "en-US",
                "localePagesId": "some.fictional.page",
                "metaData": {
                  "description": undefined,
                  "title": "openscript Ltd.",
                },
              },
              "isCreatedByStatefulCreatePages": true,
            },
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `);
  });

  it('sets the meta data', async () => {
    args.page = {
      context: {
        localePagesId: 'index',
        locale: 'en-US',
      },
      isCreatedByStatefulCreatePages: true,
    };
    await generatePageMetaData(args);
    expect(args.actions.deletePage).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": [
          [
            {
              "context": {
                "locale": "en-US",
                "localePagesId": "index",
              },
              "isCreatedByStatefulCreatePages": true,
            },
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `);
    expect(args.actions.createPage).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": [
          [
            {
              "context": {
                "locale": "en-US",
                "localePagesId": "index",
                "metaData": {
                  "description": "Companions for adventures in the world of bits and bytes.",
                  "title": "Home - openscript Ltd.",
                },
              },
              "isCreatedByStatefulCreatePages": true,
            },
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `);
  });
});
