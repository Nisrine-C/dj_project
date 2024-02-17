import "./Navbar.css";

const Navbar = () => {
  
    return (
      <div className="navbar">
        
        <a href="/" className="logo" >
          <span>DJKhalid</span>
          </a>
        <nav>
          <a className="nav_elem" href="/" >HOME</a>
          <a className="nav_elem" href="/calendar" >CALENDAR</a>
          <a className="nav_elem" href="/pricing" >PRICING</a>
          <a className="nav_elem" href="/contact" >CONTACT US</a>
          <a className="nav_elem" href="/about" >ABOUT ME</a>
        </nav>
      </div>
    );
  };
  
  export default Navbar;