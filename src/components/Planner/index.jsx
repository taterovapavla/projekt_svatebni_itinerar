import './style.css';
import { Chrono } from 'react-chrono';
import { timelineInfo } from './timeline-info';

export const Planner = () => {
  console.log(timelineInfo);
  return (
    <>
      <div className="planner__header">
        <h1 className="planner__heading">Svatební online itinerář</h1>
      </div>
      <div className="planner__content">
        <Chrono 
          items={timelineInfo}
          theme={{
            cardBgColor: "none",
            nestedCardBgColor: "white",
            titleColor: "black",
            titleColorActive: "black",
          }}
          mode="HORIZONTAL" nestedCardHeight={200} />
      </div>
    </>
  );
};
