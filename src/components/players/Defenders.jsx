import {
	getCenterBacks,
	getFullbacks,
	getGoalkeepers,
} from "../../store/fetchData";
import PlayersCard from "./PlayersCard";

const Defenders = () => {
	const goalkeepers = getGoalkeepers();
	const centerBacks = getCenterBacks();
	const fullbacks = getFullbacks();

	const renderGoalkeepers = () => {
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
				<div className="goalkeepers-cont">
					<h4>GoalKeepers</h4>
					<ul>{renderGoalkeepers()}</ul>
				</div>
				<div className="center-backs-cont">
					<h4>Center-Backs</h4>
					<ul>{renderCenterBacks()}</ul>
				</div>
				<div className="fullbacks-cont">
					<h4>Fullbacks</h4>
					<ul>{renderFullbacks()}</ul>
				</div>
			</div>
		</div>
	);
};

export default Defenders;
