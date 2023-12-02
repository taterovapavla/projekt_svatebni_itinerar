import './style.css';
import { Chrono } from 'react-chrono';
import { timelineInfo } from './timeline-info';

export const Planner = () => {
  return (
    <>
      <div className="planner__header">
        <h1 className="planner__heading">Svatební online itinerář</h1>
      </div>
      <div className="planner__content">
        <Chrono
          items={timelineInfo}
          mode="HORIZONTAL"
          nestedCardHeight={200}
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
