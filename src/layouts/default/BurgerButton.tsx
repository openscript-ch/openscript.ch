import styled from '@emotion/styled';
import { defaultTheme } from '../../themes/defaultTheme';

const BurgerButtonContainer = styled.button`
  width: 2.5rem;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  height: 2rem;
  width: 3rem;
  z-index: 30;

  div,
  &::after,
  &::before {
    width: 100%;
    height: 0.3rem;
    border-radius: 0.1rem;
    background-color: ${defaultTheme.backgroundColor};
    transition: top 0.05s 0.1s, bottom 0.05s 0.1s, transform 0.1s;
    content: '';
    display: block;
    position: absolute;
    left: 0;
  }

  &:hover {
    div,
    &::after,
    &::before {
      background-color: ${defaultTheme.secondaryColor};
    }
  }

  div {
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.open {
    div {
      display: none;
    }

    &::before,
    &::after {
      top: 40%;
      bottom: 40%;
      background-color: ${defaultTheme.secondaryColor};
      // reverse transition
      transition: transform 0.1s 0.05s, top 0.05s, bottom 0.05s;
    }

    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
`;

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <BurgerButtonContainer className={isOpen ? 'open' : ''} onClick={onClick}>
      <div />
    </BurgerButtonContainer>
  );
}
