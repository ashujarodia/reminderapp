import React from "react";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<div className="landingPageContainer">
			<h1 className="title">Welcome to Reminder App</h1>
			<div className="options">
				<button
					className="button"
					onClick={() => navigate("/login")}
				>
					Login
				</button>
				<button
					className="button signupBtn"
					onClick={() => navigate("/signup")}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
