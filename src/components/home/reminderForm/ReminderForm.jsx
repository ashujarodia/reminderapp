import { useState } from 'react';
import './ReminderForm.scss';

const ReminderForm = ({ onAddReminder }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminder = { name, date, time };
    onAddReminder(reminder);
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <form className="reminder-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
