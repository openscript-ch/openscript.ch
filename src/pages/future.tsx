import { PageProps } from 'gatsby';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SitePageContext } from '../types';

export default function FuturePage({}: PageProps<{}, SitePageContext>) {
  return (
    <DefaultLayout>
      <section>
        <h2>Achtung Baustelle</h2>
        Hier wird noch gebaut..
      </section>
    </DefaultLayout>
  );
}
