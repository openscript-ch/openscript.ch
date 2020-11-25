import styled from '@emotion/styled';
import React from 'react';
import { ReactComponent as OpenscriptLogo } from '../../static/logo.svg';
import { LocalizedLink } from './LocalizedLink';

const StyledLogo = styled(OpenscriptLogo)`
  height: 2rem;
`;

type LogoProps = {
  homePath: string;
};

export function Logo({ homePath }: LogoProps) {
  return (
    <LocalizedLink to={homePath}>
      <StyledLogo />
    </LocalizedLink>
  );
}
