import { Fragment } from 'react';

type DocumentProps = {
  metaData: Queries.SitePageContextMetaData;
};

export function Document({ metaData }: DocumentProps) {
  return (
    <Fragment>
      <title key="pageTitle">{metaData.title}</title>
      <meta key="pageDescription" name="description" content={metaData.description} />
    </Fragment>
  );
}
