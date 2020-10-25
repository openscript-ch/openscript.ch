import React from 'react';

type DefaultFooterProps = {
  buildInfo: JSX.Element;
};

export function DefaultFooter({ buildInfo }: DefaultFooterProps) {
  return <footer>{buildInfo}</footer>;
}
