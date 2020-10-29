import styled from '@emotion/styled';
import React from 'react';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-alternate-color);
`;

type DefaultFooterProps = {
  buildInfo: JSX.Element;
};

export function DefaultFooter({ buildInfo }: DefaultFooterProps) {
  return <StyledFooter>{buildInfo}</StyledFooter>;
}
