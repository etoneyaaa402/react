import React, { useState } from 'react';
import './Notes.css';

const Notes = ({ notes, onAddNote, onEditNote, onDeleteNote, onDeleteAllNotes }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({ title, date, content });
    setTitle('');
    setDate('');
    setContent('');
  };

  return (
    <div className="notes">
      <form onSubmit={handleSubmit} className="note-form">
        <label>Заголовок заметки</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Дата заметки</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Текст заметки</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="add-note-btn">Добавить заметку</button>
      </form>
      {notes.length > 0 && (
        <div className="delete-buttons">
          <button onClick={onDeleteAllNotes}>Удалить все заметки</button>
        </div>
      )}
      <div className="notes-list">
{notes.map((note, index) => (
<div key={index} className="note">
<h3>{note.title}</h3>
<p>{note.date}</p>
<p>{note.content}</p>
<button onClick={() => onEditNote(index)}>Редактировать</button>
<button onClick={() => onDeleteNote(index)}>Удалить</button>
</div>
))}
</div>
</div>
);
};

export default Notes;
