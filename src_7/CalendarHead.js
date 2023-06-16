import React from 'react';

const CalendarHead = ({ currentDate, format, nextMonth, prevMonth }) => (
  <div className="calendar-head">
    <button onClick={prevMonth}>&lt;</button>
    <span>{format(currentDate, 'MMMM yyyy')}</span>
    <button onClick={nextMonth}>&gt;</button>
  </div>
);

export default CalendarHead;