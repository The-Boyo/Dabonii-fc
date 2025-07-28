import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import Office from "./office/Office";
import Home from "./home/Home";
import Players from "./players/Players";
import Matches from "./matches/Matches";
import Training from "./training/Training";
import About from "./about/About";

const App = () => {
	const setFooterPosition = () => {
		const containerHeight = document
			.querySelector(".container")
			.getBoundingClientRect().height;

		const currentContentHeight = document
			.querySelector(".content")
			.getBoundingClientRect().height;

		const footerHeight = document
			.querySelector(".footer")
			.getBoundingClientRect().height;

		if (currentContentHeight + footerHeight < containerHeight) {
			document.querySelector(".footer").style.position = "absolute";
		} else {
			document.querySelector(".footer").style.position = "relative";
		}
	};

	useEffect(() => {
		const resizeObserver = new ResizeObserver(setFooterPosition);

		resizeObserver.observe(document.querySelector(".container"));

		return () => resizeObserver.disconnect();
	});

	return (
		<div className="container">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={"/"} exact element={<Home />} />
					<Route path={"/office"} exact element={<Office />} />
					<Route path={"/players"} exact element={<Players />} />
					<Route path={"/matches"} exact element={<Matches />} />
					<Route path={"/training"} exact element={<Training />} />
					<Route path="/about" exact element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
