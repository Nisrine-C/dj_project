import "./Booking.css";
import Tuto from "../../components/tuto/Tuto";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import BookingForm from "../../components/booking-form/BookingForm";



const Booking = () => {
  return (
    <div className="Booking" >
      <div className="title-container">
        <img src="Assets/pexels-tara-winstead-647955.jpg" />
        <h1>Book your DJ</h1>
      </div>
      <div className="tutorials">
        <Tuto/>
      </div>
        <div className="book-here-wrapper">
          <div className="book-here">
            <CalendarComponent/>
            <BookingForm/>
          </div>
        </div>
    </div>
  );
};

export default Booking;
