import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarComponent.css";



const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  //const disabledDates = [tomorrow, in3Days, in5Days];

  function tileDisabled({ date, view }) {
    // Disable tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of disabled dates
      //return disabledDates.find(dDate => isSameDay(dDate, date));
    }
  }
  function onChange(nextValue) {
    setValue(nextValue);
  }


  return (
    <div className="calendar-wrapper">
      <Calendar
      onChange={onChange}
      value={value}
    />
    </div>
  );
};

export default CalendarComponent;
