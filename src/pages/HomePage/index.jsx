import { Link } from 'react-router-dom';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <h1 className='homepage__heading'>Svatební online itinerář</h1>
        <h2 className='homepage__subtitle'>Naplánujte si svůj velký den online</h2>
        <button className="homepage__button">
          <Link to='/planner'>Začít</Link>
        </button>
      </div>
    </>
  );
};
