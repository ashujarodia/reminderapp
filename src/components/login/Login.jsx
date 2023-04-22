import React, { useState } from "react";
import "./Login.scss";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [disableButton, setDisableButton] = useState(false);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
		setPassword("");
		if (!email || !password) {
			return;
		}

		setDisableButton(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(async (res) => {
				setDisableButton(false);
				console.log(res);
				navigate("/");
			})
			.catch((err) => {
				console.log("Error ", err);
				setError(err.message);
				setDisableButton(false);
				alert(err.message);
			});
	};

	return (
		<div className="login">
			<h1 className="title">Log In to Reminder App</h1>
			<form className="form">
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
					className="button"
					onClick={handleSubmit}
					disabled={disableButton}
				>
					Log In
				</button>
			</form>
		</div>
	);
};

export default Login;
