import { useSelector } from "react-redux";
import PlayersCard from "./PlayersCard";

const Defenders = () => {
	const { players, status } = useSelector((state) => state.players);

	const defenders = players.find(
		(thePlayers) => Object.keys(thePlayers)[0] === "defenders"
	);

	const renderGoalkeepers = () => {
		const { goalkeepers } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "goalkeepers"
		);

		return goalkeepers.map((keeper) => {
			return (
				<li
					key={keeper.id}
					className={`dabonii-player ${keeper.name.split(" ")[0]}-${keeper.position}`}
				>
					<PlayersCard player={keeper} />
				</li>
			);
		});
	};

	const renderCenterBacks = () => {
		const { centerBacks } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "centerBacks"
		);

		return centerBacks.map((cb) => {
			return (
				<li
					key={cb.id}
					className={`dabonii-player ${cb.name.split(" ")[0]}-${cb.position}`}
				>
					<PlayersCard player={cb} />
				</li>
			);
		});
	};

	const renderFullbacks = () => {
		const { fullbacks } = defenders.defenders.find(
			(def) => Object.keys(def)[0] === "fullbacks"
		);

		return fullbacks.map((fb) => {
			return (
				<li
					key={fb.id}
					className={`dabonii-player ${fb.name.split(" ")[0]}-${fb.position}`}
				>
					<PlayersCard player={fb} />
				</li>
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
