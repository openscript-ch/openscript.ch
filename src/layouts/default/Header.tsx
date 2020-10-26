import styled from '@emotion/styled';
import React from 'react';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type DefaultHeaderProps = {
  languageSwitcher: JSX.Element;
  logo: JSX.Element;
};

export function DefaultHeader({ languageSwitcher, logo }: DefaultHeaderProps) {
  return (
    <StyledHeader>
      {logo}
      {languageSwitcher}
    </StyledHeader>
  );
}
