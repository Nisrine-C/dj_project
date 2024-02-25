import "./Home.css";
import "./components/Section_2/Testimonials.css";
import "./components/Section_3/CTA.css";
import SectionAboutArtist from "./components/Section_1/SectionAboutArtist";
import SectionGallery from "./components/Section_4/SectionGalley";

const Home = () => {
  return (
    <div className="Home">
      <div className="hero">
        <div className="background">
          <img src="Assets\Hero.jpeg"></img>
        </div>
        <div className="quote">
          <span>I am</span>
          <p>
            PASSIONATE ABOUT DELIVERING PROFESSIONAL AND FUN ENTERTAINMENT ON
            YOUR BIG DAY!
          </p>
        </div>
      </div>
      <div className="container">
        <SectionAboutArtist />
      </div>
      <div className="hr_div">
        <hr />{" "}
      </div>
      <div className="container-test">
        <div className="test-header">
          Kind Words from <br />
          Amazing people
        </div>
        <div className="testimonials">
          <div className="test-arrow">
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="black"
              >
                <path d="M356.47,41c4.45,0,8.9,1.11,12.23,4.45a16.12,16.12,0,0,1,0,23.35L180.77,256.7,368.7,444.62A16.51,16.51,0,0,1,345.35,468l-199-199a16.12,16.12,0,0,1,0-23.35l199-200.15A14.28,14.28,0,0,1,356.47,41Z"></path>
              </svg>
            </div>
          </div>
          <div className="testimonial-place">
            <div className="testimomial-1">
              <div className="test1-picture">
                <img src="Assets\test-pic.jpg" alt="" />
              </div>
              <div className="test1-word">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur numquam expedita, sint consequatur, soluta sed officia
                asperiores error illum voluptates ut sit, rem accusantium
                doloribus.
              </div>
            </div>
          </div>
          .
          <div className="test-arrow">
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="black"
              >
                <path d="M158.53,473c-4.45,0-8.9-1.11-12.23-4.45a16.12,16.12,0,0,1,0-23.35L334.23,257.25,146.3,69.33A16.51,16.51,0,0,1,169.65,46l199,199a16.12,16.12,0,0,1,0,23.35l-199,200.15A14.28,14.28,0,0,1,158.53,473Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container_CTA">
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

      <div className="container">
        <SectionGallery />
      </div>
    </div>
  );
};

export default Home;
