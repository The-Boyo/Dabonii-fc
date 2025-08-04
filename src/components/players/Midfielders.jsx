import { useState } from "react";
import { getMidfielders } from "../../store/fetchData";
import PlayersCard from "./PlayersCard";
import { createPortal } from "react-dom";
import PlayerDetailsModal from "../modal/PlayerDetailsModal";
import { useScrollYContext } from "../../contexts/ScrollYContext";

const Midfielders = () => {
	const [isPortalOpen, setPortal] = useState(false);

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

	const midfielders = getMidfielders();

	const handlePlayerListClick = (e) => {
		console.log(e.target);
		setPortal(true);
	};

	const renderMidfielders = (pos) => {
		return midfielders.map((mida) => {
			if (pos === mida.position) {
				return (
					<>
						<li
							onClick={handlePlayerListClick}
							className={`dabonii-player ${mida.name}-${mida.position}`}
						>
							<PlayersCard player={mida} />
						</li>
						{isPortalOpen &&
							createPortal(
								<PlayerDetailsModal onClose={() => setPortal(false)} />,
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
