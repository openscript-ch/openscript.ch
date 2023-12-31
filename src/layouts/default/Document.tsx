import { Script } from 'gatsby';
import { Fragment } from 'react';

type DocumentProps = {
  metaData: Queries.SitePageContextMetaData;
};

export function Document({ metaData }: DocumentProps) {
  return (
    <Fragment>
      <title key="pageTitle">{metaData.title}</title>
      <meta key="pageDescription" name="description" content={metaData.description} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <Script id="analytics" defer data-domain="openscript.ch" src="https://analytics.obin.ch/js/script.js" />
    </Fragment>
  );
}
