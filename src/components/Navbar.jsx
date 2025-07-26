import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/base">Topics To Learn</Link>
    </nav>
  );
}

export default Navbar;
