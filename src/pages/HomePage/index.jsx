import { Link } from 'react-router-dom';
import './style.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DatePickerValue } from '../../components/DatePicker/index.jsx';

export const HomePage = () => {
  const [date, setDate] = useLocalStorage('date', '');

  return (
    <>
      <div className="homepage">
        <h1 className="homepage__heading">Svatební online itinerář</h1>
        <h2 className="homepage__subtitle">
          Naplánujte si svůj velký den online
        </h2>
        <DatePickerValue
        setDateHomepage={setDate}
        />
        <Link
        className={ date ? "homepage__link" : "homepage__link homepage__link--disabled"} to="/planner">
          Začít
        </Link>
      </div>
    </>
  );
};
