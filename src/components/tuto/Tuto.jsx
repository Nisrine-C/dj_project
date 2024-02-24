import "./Tuto.css";

const Tuto = () => {
  return (
    <div className="Tuto">
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <img srcSet="image1" alt="" />
          </div>
          <div className="card-text">Check Your date and Select it !</div>
        </div>

        <div className="card">
          <div className="card-img">
            <img srcSet="image2" alt="" />
          </div>
          <div className="card-text">Fill Out the Form !</div>
        </div>

        <div className="card">
          <div className="card-img">
            <img srcSet="image3" alt="" />
          </div>
          <div className="card-text">
            We will get back to you in less than 24 hours!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuto;
