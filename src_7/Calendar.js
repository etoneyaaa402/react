import React, { useState } from 'react';
import { format, startOfWeek, addMonths, subMonths, startOfMonth, endOfMonth, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';
import Notes from './Notes';
import './Calendar.css'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayNotes, setSelectedDayNotes] = useState([]);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const onDateClick = day => {
    if (selectedDay && isSameDay(selectedDay, day)) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
      setSelectedDayNotes([]);
    }
  };

  const handleAddNote = note => {
    setSelectedDayNotes([...selectedDayNotes, note]);
  };

  const handleEditNote = (noteIndex, updatedNote) => {
    const updatedNotes = selectedDayNotes.map((note, index) => {
      if (index === noteIndex) {
        return updatedNote;
      }
      return note;
    });
    setSelectedDayNotes(updatedNotes);
  };

  const handleDeleteNote = noteIndex => {
    const updatedNotes = selectedDayNotes.filter((_, index) => index !== noteIndex);
    setSelectedDayNotes(updatedNotes);
  };

  const handleDeleteAllNotes = () => {
    setSelectedDayNotes([]);
  };

  return (
    <div className="calendar">
      <CalendarHead
        currentDate={currentDate}
        format={format}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <CalendarBody
        currentDate={currentDate}
        startOfWeek={startOfWeek}
        startOfMonth={startOfMonth}
        endOfMonth={endOfMonth}
        endOfWeek={endOfWeek}
        addDays={addDays}
        isSameMonth={isSameMonth}
        isSameDay={isSameDay}
        onDateClick={onDateClick}
        selectedDay={selectedDay}
      />
      {selectedDay && (
        <Notes
          notes={selectedDayNotes}
          onAddNote={handleAddNote}
          onEditNote={handleEditNote}
          onDeleteNote={handleDeleteNote}
          onDeleteAllNotes={handleDeleteAllNotes}
        />
      )}
    </div>
  );
};

export default Calendar;
