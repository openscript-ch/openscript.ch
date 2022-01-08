import { Fragment, PropsWithChildren } from 'react';
import { SingleColorDivider } from './SingleColorDivider';

type Props = PropsWithChildren<{
  upperColor: string;
  lowerColor: string;
  flipVertically?: boolean;
  flipHorizontally?: boolean;
  className?: string;
}>;

export function DividedSection({ children, flipVertically, flipHorizontally, upperColor, lowerColor, className }: Props) {
  return (
    <Fragment>
      <section className={className}>{children}</section>
      <SingleColorDivider flipVertically={flipVertically} flipHorizontally={flipHorizontally} upperColor={upperColor} lowerColor={lowerColor} />
    </Fragment>
  );
}
