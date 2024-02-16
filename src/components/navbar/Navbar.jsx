import "./Navbar.css";

const Navbar = () => {
  
    return (
      <div className="navbar">
        <a href="/" className="logo" >
          <img src="./logo.svg" alt="logo"></img>
          </a>
        <nav>
          <a className="nav_elem" href="/" >Home</a>
          <a className="nav_elem" href="/calendar" >Calendar</a>
          <a className="nav_elem" href="/pricing" >Pricing </a>
          <a className="nav_elem" href="/contact" >Contact us</a>
          <a className="nav_elem" href="/about" >About me</a>
        </nav>
      </div>
    );
  };
  
  export default Navbar;