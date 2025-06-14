import { useEffect } from "react";

import "./App.css";

const App = () => {
	useEffect(() => {
		const handleBodyScroll = () => {
			console.log("body scrolled");
		};

		window.addEventListener("scroll", handleBodyScroll);

		return () => window.removeEventListener("scroll", handleBodyScroll);
	});

	return <h1>App</h1>;
};

export default App;
