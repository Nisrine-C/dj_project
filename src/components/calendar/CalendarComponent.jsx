import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarComponent.css";



const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }


  return (
    // <div className="Calendar" >
    //   <div className="month">
    //     <i class="fa fa-angle-left prev"></i>
    //     <h3 className="date">February 2024</h3>
    //     <i class="fa fa-angle-right next"></i>
    //   </div>
    //   <div className="weekdays">
    //     <div className="day">mon</div>
    //     <div className="day">tue</div>
    //     <div className="day">wed</div>
    //     <div className="day">thu</div>
    //     <div className="day">fri</div>
    //     <div className="day">sat</div>
    //     <div className="day">sun</div>
    //   </div>
    // </div>
    <div className="calendar-wrapper">
      <Calendar
      onChange={onChange}
      value={value}
    />
    </div>
  );
};

export default CalendarComponent;
