import styled from '@emotion/styled';
// import { Link } from 'gatsby';
import React from 'react';

const StyledSection = styled.section`
  padding: 1rem;

  & > h2 {
    font-size: 3rem;
    font-weight: 100;
    font-family: Prompt;

    & > strong {
      font-weight: normal;
      display: block;
    }
  }
`;

type ValueSectionProps = {
  title: JSX.Element;
  bulletPoints: JSX.Element;
};

export function ValueSection({ title, bulletPoints }: ValueSectionProps) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {bulletPoints}
    </StyledSection>
  );
}
