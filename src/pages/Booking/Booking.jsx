import "./Booking.css";
import Tuto from "../../components/tuto/Tuto";
import Calendar from "../../components/calendar/Calendar";
import BookingForm from "../../components/booking-form/BookingForm";

const Booking = () => {
  return (
    <div className="Booking">
      <div className="title-container">
        <img src="Assets/Booking.jpg" />
        <h1>Book your DJ</h1>
      </div>
      <div className="tutorials">
        <Tuto />
      </div>
      <div className="book-here-wrapper">
        <div className="book-here">
          <Calendar />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
