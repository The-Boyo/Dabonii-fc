import { useSelector } from "react-redux";
import PlayersCard from "./PlayersCard";
import { handlePlayerCardClick } from "./Midfielders";
import { useModal } from "../../hooks/useModal";
import PlayerDetailsModal from "../modal/PlayerDetailsModal";
import { Fragment } from "react/jsx-runtime";

export const showModal = (name, isPortalOpen, thePlayerName, setPortal) => {
	if (isPortalOpen && name.split(" ")[0] === thePlayerName.name) {
		return (
			<PlayerDetailsModal
				playerData={thePlayerName}
				onClose={() => setPortal(false)}
			/>
		);
	}
};

const Defenders = () => {
	// Custom Hook
	const [isPortalOpen, setPortal, thePlayerName, setPlayerName] = useModal();

	const { players, status } = useSelector((state) => state.players);

	const defenders = players.find(
		(thePlayers) => Object.keys(thePlayers)[0] === "defenders"
	);

	// Handle Player Click
	const handlePlayerClick = (e, playerPos, generalPosition) => {
		handlePlayerCardClick(
			e,
			playerPos,
			generalPosition,
			setPortal,
			setPlayerName
		);
	};

	const renderGoalkeepers = () => {
		const { goalkeepers } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "goalkeepers"
		);

		return goalkeepers.map((keeper) => {
			return (
				<Fragment key={`${keeper.name}-${keeper.id}`}>
					<li
						onClick={(e) => handlePlayerClick(e, keeper.position, "defender")}
						key={`${keeper.name}-${keeper.id}`}
						className={`dabonii-player ${keeper.name.split(" ")[0]}-${keeper.position}`}
					>
						<PlayersCard player={keeper} />
					</li>
					{showModal(keeper.name, isPortalOpen, thePlayerName, setPortal)}
				</Fragment>
			);
		});
	};

	const renderCenterBacks = () => {
		const { centerBacks } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "centerBacks"
		);

		return centerBacks.map((cb) => {
			return (
				<Fragment key={`${cb.name}-${cb.id}`}>
					<li
						onClick={(e) => handlePlayerClick(e, cb.position, "defender")}
						key={`${cb.name}-${cb.id}`}
						className={`dabonii-player ${cb.name.split(" ")[0]}-${cb.position}`}
					>
						<PlayersCard player={cb} />
					</li>
					{showModal(cb.name, isPortalOpen, thePlayerName, setPortal)}
				</Fragment>
			);
		});
	};

	const renderFullbacks = () => {
		const { fullbacks } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "fullbacks"
		);

		return fullbacks.map((fb) => {
			return (
				<Fragment key={`${fb.name}-${fb.id}`}>
					<li
						onClick={(e) => handlePlayerClick(e, fb.position, "defender")}
						className={`dabonii-player ${fb.name.split(" ")[0]}-${fb.position}`}
					>
						<PlayersCard player={fb} />
					</li>
					{showModal(fb.name, isPortalOpen, thePlayerName, setPortal)}
				</Fragment>
			);
		});
	};

	return (
		<div className="defenders">
			<h2>Defenders</h2>
			<div>
				<div className="goalkeepers-cont position-container">
					<h4>GoalKeepers</h4>
					<ul>
						{status === "idle" ? (
							<p>Loading Goalkeepers...</p>
						) : (
							renderGoalkeepers()
						)}
					</ul>
				</div>
				<div className="center-backs-cont position-container">
					<h4>Center-Backs</h4>
					<ul>
						{status === "idle" ? (
							<p>Loading CenterBacks...</p>
						) : (
							renderCenterBacks()
						)}
					</ul>
				</div>
				<div className="fullbacks-cont position-container">
					<h4>Fullbacks</h4>
					<ul>
						{status === "idle" ? (
							<p>Loading Fullbacks...</p>
						) : (
							renderFullbacks()
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Defenders;
