import React, { useState } from "react";
import "./Signup.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [disableButton, setDisableButton] = useState(false);
	const [error, setError] = useState("");

  const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
		setName("");
		setPassword("");
		if (!name || !email || !password) {
			return;
		}

		setDisableButton(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (res) => {
				setDisableButton(false);
				console.log(res);
				const user = res.user;
				await updateProfile(user, {
					displayName: name,
				});
        navigate("/home")
			})
			.catch((err) => {
				console.log("Error ", err);
				setError(err.message);
				setDisableButton(false);
				alert(err.message);
			});
	};

	return (
		<div className="signup">
			<h1 className="title">Sign Up for Reminder App</h1>
			<form className="form">
				<label className="label">Name</label>
				<input
					className="input"
					type="text"
					placeholder="Enter your name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label className="label">Email</label>
				<input
					className="input"
					type="email"
					placeholder="Enter your email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="off"
				/>
				<label className="label">Password</label>
				<input
					className="input"
					type="password"
					placeholder="Enter your password"
					required
					value={password}
					autoComplete="off"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="button"
					onClick={handleSubmit}
					disabled={disableButton}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
