import { Link } from "react-router-dom";

function Navbar(){
  return(
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/feature">Feature</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar;
