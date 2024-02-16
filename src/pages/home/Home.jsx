import "./Home.css"
import SectionAboutArtist from "./components/Section_1/SectionAboutArtist";

const Home = () => {
    return (
      <div className="Home">
        <div className="hero">
          <div className="background">
            <img src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
          </div>
          <div className="quote">
            <span>I AM</span>
            <p>PASSIONATE ABOUT DELIVERING PROFESSIONAL AND FUN ENTERTAINMENT ON YOUR WEDDING DAY!</p>
          </div>
        </div>
        <div className="container">
            <SectionAboutArtist/>
        </div>
      </div>
    );
  };
  
  export default Home;