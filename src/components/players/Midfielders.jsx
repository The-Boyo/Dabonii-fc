import PlayersCard from "./PlayersCard";
import PlayerDetailsModal from "../modal/PlayerDetailsModal";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal";

export const handlePlayerCardClick = (
	e,
	playerPos,
	generalPosition,
	setPortal,
	setPlayerName
) => {
	if (
		e.target.className.includes("dabonii-player") ||
		e.target.parentElement.className.includes("dabonii-player") ||
		e.target.parentElement.parentElement.className.includes("dabonii-player")
	) {
		if (e.target.className.includes("dabonii-player"))
			setPlayerName({
				name: e.target.className.split(/[ , -]/)[2],
				generalPosition,
				specificPosition: playerPos,
			});
	}

	if (e.target.parentElement.className.includes("dabonii-player")) {
		setPlayerName({
			name: e.target.parentElement.className.split(/[ , -]/)[2],
			generalPosition,
			specificPosition: playerPos,
		});
	}

	if (
		e.target.parentElement.parentElement.className.includes("dabonii-player")
	) {
		setPlayerName({
			name: e.target.parentElement.parentElement.className.split(/[ , -]/)[2],
			generalPosition,
			specificPosition: playerPos,
		});
	}

	setPortal(true);
};

const Midfielders = () => {
	// Custom Hook
	const [isPortalOpen, setPortal, thePlayerName, setPlayerName] = useModal();

	const players = useSelector((state) => state.players.players);

	const theMidfielders = players.find(
		(el) => Object.keys(el)[0] === "midfielders"
	);

	const handlePlayerListClick = (e, playerPos, generalPosition) => {
		handlePlayerCardClick(
			e,
			playerPos,
			generalPosition,
			setPortal,
			setPlayerName
		);
	};

	const renderMidfielders = (pos) => {
		return theMidfielders.midfielders.map((mid) => {
			if (Object.keys(mid)[0] === pos) {
				return mid[pos].map((curMida) => {
					return (
						<>
							<li
								key={curMida.id}
								onClick={(e) =>
									handlePlayerListClick(e, curMida.position, "midfielder")
								}
								className={`dabonii-player ${curMida.name}-${curMida.position}`}
							>
								<PlayersCard player={curMida} />
							</li>
							{isPortalOpen &&
								createPortal(
									<PlayerDetailsModal
										playerData={thePlayerName}
										onClose={() => setPortal(false)}
									/>,
									document.getElementById("modal")
								)}
						</>
					);
				});
			} else return null;
		});
	};

	return (
		<div className="midfielders">
			<h2>Midfielders</h2>
			<div>
				<div className="dm-cont position-container">
					<h4>Defensive Midfielders</h4>
					<ul>{renderMidfielders("DefensiveMidfielders")}</ul>
				</div>
				<div className="am-cont position-container">
					<h4>Attacking Midfielders</h4>
					<ul>{renderMidfielders("AttackingMidfielders")}</ul>
				</div>
			</div>
		</div>
	);
};

export default Midfielders;
