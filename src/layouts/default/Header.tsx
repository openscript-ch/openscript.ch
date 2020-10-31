import styled from '@emotion/styled';
import React from 'react';

const HorizontalLayout = styled.div`
  display: flex;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-alternate-color);
`;

type DefaultHeaderProps = {
  contactBar: JSX.Element;
  languageSwitcher: JSX.Element;
  logo: JSX.Element;
};

export function DefaultHeader({ contactBar, languageSwitcher, logo }: DefaultHeaderProps) {
  return (
    <StyledHeader>
      {logo}
      <HorizontalLayout>
        {contactBar}
        {languageSwitcher}
      </HorizontalLayout>
    </StyledHeader>
  );
}
