declare module '*.svg' {
  import { PureComponent, SVGProps } from 'react';

  export class ReactComponent extends PureComponent<SVGProps<SVGSVGElement>> {}
}
declare module '*.ttf';
declare module '*.eot';
declare module '*.woff';
declare module '*.woff2';
