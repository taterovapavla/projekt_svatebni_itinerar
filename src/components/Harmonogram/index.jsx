import { Chrono } from 'react-chrono';
import './style.css';
import { items } from './harmonogram-info';

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
      </div>
    </>
  );
};

export default Harmonogram;
