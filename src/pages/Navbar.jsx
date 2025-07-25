import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to='base/'>Topics To Learn</Link> 
    </nav>
  );
}

export default Navbar;