import { useState } from "react";
import ReminderForm from "./reminderForm/ReminderForm";
import ReminderList from "./reminderList/ReminderList";
import "./Home.scss";

const Home = () => {
	const [reminders, setReminders] = useState([]);

	const handleAddReminder = (reminder) => {
		const newReminder = { ...reminder, id: Math.floor(Math.random() * 10000) };
		setReminders([...reminders, newReminder]);
		console.log(newReminder);
	};

	const handleDeleteReminder = (id) => {
		const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
		setReminders(updatedReminders);
	};

	return (
		<>
			<div className="home-page">
				<div className="reminder-form">
					<h1> Add a Reminder</h1>
					<ReminderForm onAddReminder={handleAddReminder} />
				</div>
				{reminders.length > 0 ? (
					<div className="reminders">
						<h1>Your Reminders</h1>
						<ReminderList
							reminders={reminders}
							onDeleteReminder={handleDeleteReminder}
						/>
					</div>
				) : (
					<p>No reminders added yet</p>
				)}
			</div>
		</>
	);
};

export default Home;
