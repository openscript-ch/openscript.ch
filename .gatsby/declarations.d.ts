declare module '*.svg' {
  import { PureComponent, SVGProps } from 'react';

  export class ReactComponent extends PureComponent<SVGProps<SVGSVGElement>> {}
}
