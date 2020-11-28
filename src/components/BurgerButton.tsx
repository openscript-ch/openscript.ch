import styled from '@emotion/styled';
import React from 'react';

const BurgerButtonBase = styled.div`
  display: block;
  background: transparent;
  width: 2rem;
  cursor: pointer;

  &:before,
  div,
  &:after {
    content: '';
    display: block;
    height: 0.3rem;
    background-color: var(--primary-color);
    margin: 0.26rem 0;
    transition: 0.2s;
  }

  &:hover:before,
  &:hover div,
  &:hover:after {
    background-color: var(--secondary-color);
  }

  &.active:before {
    transform: translateY(0.56rem) rotate(140deg);
  }

  &.active div {
    transform: scale(0);
  }

  &.active:after {
    transform: translateY(-0.56rem) rotate(-140deg);
  }
`;

type BurgerButtonProps = {
  className?: string;
  isActive?: boolean;
  onClick: () => void;
};

export function BurgerButton({ className, isActive, onClick }: BurgerButtonProps) {
  const classNames = `${className} ${isActive ? 'active' : ''}`;

  return (
    <BurgerButtonBase className={classNames} onClick={onClick}>
      <div />
    </BurgerButtonBase>
  );
}
