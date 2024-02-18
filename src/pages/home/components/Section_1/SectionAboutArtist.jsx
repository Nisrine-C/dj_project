import "./SectionAboutArtist.css";
import img1 from "./images/aboutartist-img_1.jpg";
import img2 from "./images/aboutartist-img_2.png";
import img3 from "./images/aboutartist-img_3.png";
import img4 from "./images/aboutartist-img_4.png";

const SectionAboutArtist = () => {
  
    return (
      <div className="section-about-artist">
        <div className="images_1">
          <div className="img_1" >
            <img src={img1}></img>
          </div>
          <div className="img_2" >
            <img src={img2}></img>
          </div>
        </div>
        <div className="paragraph">
          <h6 className="Title">Hi I am Omar</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non feugiat libero, ac dapibus magna. Maecenas scelerisque magna ut vehicula accumsan. Nullam. Proin pulvinar vehicula mi, a faucibus risus rutrum quis. Sed non ligula quis eros pulvinar placerat vel vel elit. Aenean ac luctus leo, vitae interdum erat. Etiam ullamcorper non quam in sagittis.</p>
        </div>
        <div className="images_2">
          <div className="img_1" >
            <img src={img3}></img>
          </div>
          <div className="img_2" >
            <img src={img4}></img>
          </div>
        </div>
      </div>

    );
  };
  
  export default SectionAboutArtist;
