import "./Booking.css";
import Tuto from "../../components/tuto/Tuto";
import Calendar from "../../components/calendar/Calendar";
import BookingForm from "../../components/booking-form/BookingForm";

const Booking = () => {
  return (
    <div className="Booking">
      <h1>Book your DJ</h1>

      <div className="container">
        <Tuto />
      </div>
      <div className="container">
        <div className="book-here">
          <Calendar />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
