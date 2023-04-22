import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Home from "./components/home/Home";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		});
	}, []);

	return (
		<div className="Ap">
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<LandingPage />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signup"
						element={<SignUp />}
					/>
					{isAuthenticated && <Route path="/home" element={<Home/>} />}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
