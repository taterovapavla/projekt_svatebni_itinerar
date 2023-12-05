import { Chrono } from 'react-chrono';
import './style.css';
import { items } from './harmonogram-info';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from '../Print';
import { GoToTop } from '../GoToTop';

export const Harmonogram = () => {
  return (
    <>
      <div className="harmonogram__header">
        <h1 className="harmonogram__heading">Harmonogram svatebního dne</h1>
      </div>
      <div className="harmonogram__content">
        <Chrono
          items={items}
          mode="VERTICAL"
          cardWidth={64}
          showSingle
          hideControls
          flipLayout
          theme={{
            primary: 'grey',
            secondary: '#DB9EC5',
            cardTitleColor: 'black',
            cardBgColor: 'none',
            nestedCardBgColor: 'white',
            titleColor: 'black',
            titleColorActive: 'black',
            iconBackgroundColor: '#97B1CC',
          }}
        />
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="harmonogramdned.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Dokument se načítá...' : 'Harmonogram ke stažení ZDE!'
          }
        </PDFDownloadLink>
      </div>
      <GoToTop />
    </>
  );
};

export default Harmonogram;
