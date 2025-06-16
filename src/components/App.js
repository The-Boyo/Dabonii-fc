// import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import Office from "./office/Office";
import Home from "./home/Home";
import Players from "./players/Players";
import Fans from "./fans/Fans";
import Events from "./events/Events";
import Matches from "./matches/Matches";
import Training from "./training/Training";

const App = () => {
	// useEffect(() => {
	// 	const handleBodyScroll = () => {
	// 		console.log("body scrolled");
	// 	};

	// 	window.addEventListener("scroll", handleBodyScroll);

	// 	return () => window.removeEventListener("scroll", handleBodyScroll);
	// });

	return (
		<div className="container">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={"/"} exact element={<Home />} />
					<Route path={"/office"} exact element={<Office />} />
					<Route path={"/players"} exact element={<Players />} />
					<Route path={"/fans"} exact element={<Fans />} />
					<Route path={"/events"} exact element={<Events />} />
					<Route path={"/matches"} exact element={<Matches />} />
					<Route path={"/training"} exact element={<Training />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
