import styled from '@emotion/styled';
import React from 'react';
import { ReactComponent as Logo } from '../../../static/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  height: 2rem;
`;

type DefaultHeaderProps = {
  languageSwitcher: JSX.Element;
};

export function DefaultHeader({ languageSwitcher }: DefaultHeaderProps) {
  return (
    <StyledHeader>
      <StyledLogo />
      {languageSwitcher}
    </StyledHeader>
  );
}
