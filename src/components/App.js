import { useEffect } from "react";

import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const App = () => {
	useEffect(() => {
		const handleBodyScroll = () => {
			console.log("body scrolled");
		};

		window.addEventListener("scroll", handleBodyScroll);

		return () => window.removeEventListener("scroll", handleBodyScroll);
	});

	return (
		<div className="container">
			<Header />
			<Footer />
		</div>
	);
};

export default App;
