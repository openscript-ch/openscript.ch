import styled from '@emotion/styled';
import React from 'react';

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 1rem;
  }
`;

export type ContactBarProps = {
  phone: string;
  email: string;
};

export function ContactBar({ phone, email }: ContactBarProps) {
  return (
    <StyledList>
      <li>
        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
      </li>
      <li>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    </StyledList>
  );
}
