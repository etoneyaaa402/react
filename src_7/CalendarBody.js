import React from 'react';
import { format } from 'date-fns';

const CalendarBody = ({
  currentDate,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  onDateClick,
  selectedDay,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = 'd';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      const isToday = isSameDay(day, new Date());
      const isSelected = selectedDay && isSameDay(selectedDay, day);
      const isNotCurrentMonth = !isSameMonth(day, monthStart);

      days.push(
        <div
          className={`col cell ${
            isNotCurrentMonth ? 'disabled' : isToday ? 'today' : ''
          } ${isSelected ? 'selected' : ''}`}
          key={day}
          onClick={() => !isNotCurrentMonth && onDateClick(cloneDay)}
        >
          <span>{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div className="calendar-body">{rows}</div>;
};

export default CalendarBody;
