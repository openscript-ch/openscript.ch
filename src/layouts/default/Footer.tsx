import styled from '@emotion/styled';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from '../../components/LocalizedLink';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-alternate-color);

  nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const FooterMenu = styled.nav``;

type DefaultFooterProps = {
  buildInfo: JSX.Element;
};

export function DefaultFooter({ buildInfo }: DefaultFooterProps) {
  return (
    <StyledFooter>
      {buildInfo}
      <FooterMenu>
        <ul>
          <li>
            <LocalizedLink to={'/imprint'}>
              <FormattedMessage id="page.imprint.title" />
            </LocalizedLink>
          </li>
        </ul>
      </FooterMenu>
    </StyledFooter>
  );
}
