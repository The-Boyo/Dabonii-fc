import { useState } from "react";
import { getMidfielders } from "../../store/fetchData";
import PlayersCard from "./PlayersCard";
import { createPortal } from "react-dom";
import PlayerDetailsModal from "../modal/PlayerDetailsModal";
import { useScrollYContext } from "../../contexts/ScrollYContext";
import { useSelector } from "react-redux";

const midfielders = getMidfielders();

const Midfielders = () => {
	const [isPortalOpen, setPortal] = useState(false);
	const [thePlayerName, setPlayerName] = useState("");

	const players = useSelector((state) => state.players.players);

	const theMidfielders = players.find(
		(el) => Object.keys(el)[0] === "midfielders"
	);

	console.log(theMidfielders.midfielders);

	const scrolledHeight = useScrollYContext();
	console.log(scrolledHeight);

	if (isPortalOpen) {
		document.querySelector("body").style.overflowY = "hidden";
		if (document.querySelector(".modal-cont")) {
			document.querySelector(".modal-cont").style.top = `${scrolledHeight}px`;
		}
	} else {
		document.querySelector("body").style.overflowY = "scroll";
	}

	const handlePlayerListClick = (e) => {
		if (
			e.target.className.includes("dabonii-player") ||
			e.target.parentElement.className.includes("dabonii-player") ||
			e.target.parentElement.parentElement.className.includes("dabonii-player")
		) {
			if (e.target.className.includes("dabonii-player"))
				setPlayerName(e.target.className.split(/[ , -]/)[2]);
		}

		if (e.target.parentElement.className.includes("dabonii-player")) {
			setPlayerName(e.target.parentElement.className.split(/[ , -]/)[2]);
		}

		if (
			e.target.parentElement.parentElement.className.includes("dabonii-player")
		) {
			setPlayerName(
				e.target.parentElement.parentElement.className.split(/[ , -]/)[2]
			);
		}

		setPortal(true);
	};

	const renderMidfielders = (pos) => {
		return midfielders.map((mida) => {
			if (pos === mida.position) {
				return (
					<>
						<li
							key={mida.id}
							onClick={handlePlayerListClick}
							className={`dabonii-player ${mida.name}-${mida.position}`}
						>
							<PlayersCard player={mida} />
						</li>
						{isPortalOpen &&
							createPortal(
								<PlayerDetailsModal
									playerName={thePlayerName}
									onClose={() => setPortal(false)}
								/>,
								document.getElementById("modal")
							)}
					</>
				);
			} else return null;
		});
	};

	return (
		<div className="midfielders">
			<h2>Midfielders</h2>
			<div>
				<div className="dm-cont position-container">
					<h4>Defensive Midfielders</h4>
					<ul>{renderMidfielders("Defensive Midfielder")}</ul>
				</div>
				<div className="am-cont position-container">
					<h4>Attacking Midfielders</h4>
					<ul>{renderMidfielders("Attacking Midfielder")}</ul>
				</div>
			</div>
		</div>
	);
};

export default Midfielders;
