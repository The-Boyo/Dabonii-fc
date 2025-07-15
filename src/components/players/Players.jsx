import { useEffect, useRef, useState } from "react";

import "./Players.css";
import Defenders from "./Defenders";
import Midfielders from "./Midfielders";
import Attackers from "./Attackers";

const Players = () => {
	const [chosenPlayers, setChosenPlayers] = useState("defenders");

	const playersNavRef = useRef();

	useEffect(() => {
		const handleBodyScroll = () => {
			console.log("body has scrolled...");
			console.log(window.scrollY);

			if (window.scrollY > 0) {
				playersNavRef.current.style.position = "fixed";
				playersNavRef.current.style.top = "100px";
			} else {
				playersNavRef.current.style.position = "relative";
				playersNavRef.current.style.top = 0;
			}
		};

		window.addEventListener("scroll", handleBodyScroll);

		return () => window.removeEventListener("scroll", handleBodyScroll);
	});

	const renderPlayers = () => {
		if (chosenPlayers === "defenders") {
			return <Defenders />;
		}

		if (chosenPlayers === "midfielders") {
			return <Midfielders />;
		}

		if (chosenPlayers === "attackers") {
			return <Attackers />;
		}
	};

	return (
		<section className="players">
			<nav className="players-nav" ref={playersNavRef}>
				<ul className="players-nav-list">
					<li
						className={
							chosenPlayers === "defenders" ? "active-player-chosen" : ""
						}
						onClick={() => setChosenPlayers("defenders")}
					>
						Defenders
					</li>
					<li
						className={
							chosenPlayers === "midfielders" ? "active-player-chosen" : ""
						}
						onClick={() => setChosenPlayers("midfielders")}
					>
						Midfielders
					</li>
					<li
						className={
							chosenPlayers === "attackers" ? "active-player-chosen" : ""
						}
						onClick={() => setChosenPlayers("attackers")}
					>
						Attackers
					</li>
				</ul>
			</nav>
			{renderPlayers()}
		</section>
	);
};

export default Players;
