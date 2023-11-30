import { Link } from 'react-router-dom';
import './style.css'
export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__items">
          <Link to='/' className="navbar__item">HOMEPAGE</Link>
          <Link to='/planner' className="navbar__item">PLÁNOVAČ</Link>
          <Link to='' className="navbar__item">HARMONOGRAM AKCE</Link>
        </div>
      </nav>
    </header>
  );
};
