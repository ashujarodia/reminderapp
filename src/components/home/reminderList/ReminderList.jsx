import './ReminderList.scss';

const ReminderList = ({ reminders, onDeleteReminder }) => {
  const handleDelete = (id) => {
    onDeleteReminder(id);
  };

  return (
    <ul className="reminder-list">
      {reminders.map((reminder) => (
        <li key={reminder.id}>
          <span>{reminder.name}</span>
          <span>{reminder.date} at {reminder.time}</span>
          <button onClick={() => handleDelete(reminder.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
