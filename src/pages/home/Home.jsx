import "./Home.css";
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
          <p>
            PASSIONATE ABOUT DELIVERING PROFESSIONAL AND FUN ENTERTAINMENT ON
            YOUR WEDDING DAY!
          </p>
        </div>
      </div>
      <div className="container">
        <SectionAboutArtist />
      </div>
      <div className="container">
        <div className="CTA-Section">
          <div className="CTA-intro">
            <div className="CTA-head">Lorem ipsum dolor sit.</div>
            <div className="CTA-pg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              iusto aliquam cumque laborum dolorum molestiae unde odit odio eius
              dolore esse beatae, sed alias sint quisquam inventore accusamus,
              facilis maiores sunt neque culpa, libero quam similique. Odit,
              sapiente temporibus?.
            </div>
          </div>
          <div className="CTA-SideVideo">
            <div className="CTA-Video"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
