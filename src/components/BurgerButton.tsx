import { css, Theme } from '@emotion/react';

const burgerButtonStyles = (theme: Theme) => css`
  width: 2.5rem;
  position: relative;
  height: 2rem;
  width: 3rem;
  z-index: 30;
  display: none;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    display: block;
  }

  div,
  &::after,
  &::before {
    width: 100%;
    height: 0.3rem;
    border-radius: 0.1rem;
    background-color: ${theme.backgroundColor};
    transition:
      top 0.05s 0.1s,
      bottom 0.05s 0.1s,
      transform 0.1s;
    content: '';
    display: block;
    position: absolute;
    left: 0;
  }

  &:hover {
    div,
    &::after,
    &::before {
      background-color: ${theme.secondaryColor};
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
      background-color: ${theme.secondaryColor};
      // reverse transition
      transition:
        transform 0.1s 0.05s,
        top 0.05s,
        bottom 0.05s;
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
    <button aria-label="burger button" type="button" css={burgerButtonStyles} className={isOpen ? 'open' : ''} onClick={onClick}>
      <div />
    </button>
  );
}
