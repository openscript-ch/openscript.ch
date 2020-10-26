import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { ReactComponent as OpenscriptLogo } from '../../static/logo.svg';

const StyledLogo = styled(OpenscriptLogo)`
  height: 2rem;
`;

type LogoProps = {
  homePath: string;
};

export function Logo({ homePath }: LogoProps) {
  return (
    <Link to={homePath}>
      <StyledLogo />
    </Link>
  );
}
