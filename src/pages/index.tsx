import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { ValueSection } from '../components/ValueSection';

type IndexPageProps = { pageContext: SitePageContext };

export default function IndexPage({ pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <ValueSection
        title={
          <>
            Nachhaltige <strong>Zusammenarbeit</strong>
          </>
        }
        bulletPoints={
          <ul>
            <li>Wir kollaborieren auf Augenhöhe, egal ob Partner, Kunde oder Mitarbeitender</li>
            <li>Wir entwickeln Ideen gemeinschaftlich weiter</li>
            <li>Wir haben Spass an userem Handwerk</li>
          </ul>
        }
      />
      <ValueSection
        title={
          <>
            Nachhaltige <strong>Softwareentwicklung</strong>
          </>
        }
        bulletPoints={
          <ul>
            <li>Wir finden elegantge Lösungen für komplexe Aufgabenstellungen</li>
            <li>Wir interessieren uns für frische Technologien</li>
            <li>Wir lieben Softwareentwicklung</li>
          </ul>
        }
      />
      <ValueSection
        title={
          <>
            Nachhaltige <strong>Gesellschaft</strong>
          </>
        }
        bulletPoints={
          <ul>
            <li>Wir geben acht auf unsere Mitmenschen und unsere Umwelt</li>
            <li>Wir lernen jeden Tag dazu und geben unser Wissen weiter</li>
          </ul>
        }
      />
    </DefaultLayout>
  );
}
