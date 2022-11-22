import { PageProps } from 'gatsby';

import { Document } from '../layouts/default/Document';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function IndexPage({ children }: PageProps) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export function Head() {
  return <Document title="Home" />;
}
