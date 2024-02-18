import "./SectionGallery.css";
import Gallery from "../../../../components/gallery/Gallery";
import Form from "../../../../components/form/Form";

const SectionGallery = () => {
    return(
        <div className="section-gallery">
            <div className="gallery-wrapper">
                <h1 className="gallery-title">Follow us on Instagram</h1>
                <Gallery/>
            </div>
            <div className="form-wrapper">
                <h1 className="gallery-title">Contact us</h1>
                <Form/>
            </div>
        </div>
    );
};

export default SectionGallery;