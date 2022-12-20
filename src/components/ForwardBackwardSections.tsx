import { css, Theme, useTheme } from '@emotion/react';
import { Fragment, PropsWithChildren } from 'react';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';
import { DividedSection } from './DividedSection';
import { Arrow } from './Arrow';

const forwardAndBackwardSectionStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  padding-top: var(${theme.variables.gutter});
  padding-bottom: var(${theme.variables.gutter});

  a {
    display: flex;
    flex-direction: column;
  }

  svg {
    margin: 1rem;
    height: 2rem;
    width: auto;
  }
`;

type ForwardBackwardSectionProps = {
  message: string;
  path: string;
};

function ForwardSection({ message, path }: ForwardBackwardSectionProps) {
  const theme = useTheme();
  return (
    <DividedSection upperColor={theme.backgroundColor} lowerColor={theme.whiteColor} css={forwardAndBackwardSectionStyle}>
      <LocalizedLink to={path}>
        <Arrow rotation={180} />
        {message}
      </LocalizedLink>
    </DividedSection>
  );
}

function BackwardSection({ message, path }: ForwardBackwardSectionProps) {
  return (
    <section css={forwardAndBackwardSectionStyle}>
      <LocalizedLink to={path}>
        {message}
        <Arrow />
      </LocalizedLink>
    </section>
  );
}

type Props = PropsWithChildren<{
  forward: ForwardBackwardSectionProps;
  backward: ForwardBackwardSectionProps;
}>;

export function ForwardBackwardSections({ children, forward, backward }: Props) {
  return (
    <Fragment>
      <ForwardSection message={forward.message} path={forward.path} />
      {children}
      <BackwardSection message={backward.message} path={backward.path} />
    </Fragment>
  );
}
