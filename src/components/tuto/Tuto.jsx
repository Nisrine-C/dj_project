import "./Tuto.css";

const Tuto = () => {
  return (
    <div className="Tuto">
      <div className="tuto-header">
        <h3>How this Works ?</h3>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-header">1. Check Your date</div>
          <div className="card-img">
            <img srcSet="image1" alt="" />
          </div>
          <div className="card-text">
            Check On The Calendar Below If Your Date Is Still Free.
          </div>
        </div>

        <div className="card">
          <div className="card-header">2. Fill Out the Form</div>
          <div className="card-img">
            <img srcSet="image2" alt="" />
          </div>
          <div className="card-text">
            Fill out the form so we can contact you
          </div>
        </div>

        <div className="card">
          <div className="card-header">3. We will Get back to you</div>
          <div className="card-img">
            <img srcSet="image3" alt="" />
          </div>
          <div className="card-text">
            We will contact you in less than 24 hours!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuto;
