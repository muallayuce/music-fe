import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side links */}
        <div className="navbar-links-left">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/suggestions" className="navbar-link">Suggestions</Link>
          <Link to="/radio" className="navbar-link">Radio</Link>
        </div>

        {/* Right side links */}
        <div className="navbar-links-right">
          <Link to="/profile" className="navbar-link">Profile</Link>
          <Link to="/signin" className="navbar-link">Sign In</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
