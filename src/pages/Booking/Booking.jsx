import "./Booking.css";
import Tuto from "../../components/tuto/Tuto";
import Calendar from "../../components/calendar/Calendar";
import BookingForm from "../../components/booking-form/BookingForm";
import Image from "../../assets/pexels-tara-winstead-647955.jpg";



const Booking = () => {
  return (
    <div className="Booking" >
      <div className="title-container">
        <img src={Image} />
        <h1>Book your DJ</h1>
      </div>
      <div className="tutorials">
        <Tuto/>
      </div>
        <div className="book-here">
          <Calendar/>
          <BookingForm/>
        </div>
    </div>
  );
};

export default Booking;
