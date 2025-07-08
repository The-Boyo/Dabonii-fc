import { useState } from "react";

import "./Players.css";
import Defenders from "./Defenders";
import Midfielders from "./Midfielders";
import Attackers from "./Attackers";

const Players = () => {
	const [chosenPlayers, setChosenPlayers] = useState("defenders");

	console.log(chosenPlayers);

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
			<nav className="players-nav">
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
