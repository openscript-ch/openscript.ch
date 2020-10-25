import React from 'react';
import { Fragment } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

type BuildInfoProps = {
  buildDateTime: Date;
};

export function BuildInfo({ buildDateTime }: BuildInfoProps) {
  return (
    <Fragment>
      <FormattedDate value={buildDateTime} /> <FormattedTime value={buildDateTime} />
    </Fragment>
  );
}
