import { useSelector } from "react-redux";
// import { getAttackers } from "../../store/fetchData";
import PlayersCard from "./PlayersCard";

// const attackers = getAttackers();

const Attackers = () => {
	const { players } = useSelector((state) => state.players);

	const attackers = players.find(
		(thePlayers) => Object.keys(thePlayers)[0] === "attackers"
	);

	const renderAttacker = (pos) => {
		return attackers.attackers.map((attack) => {
			if (Object.keys(attack)[0] === pos) {
				return attack[pos].map((theAttacker) => {
					return (
						<li
							className={`dabonii-player ${theAttacker.name}-${theAttacker.position}`}
						>
							<PlayersCard player={theAttacker} />
						</li>
					);
				});
			} else return null;
		});
	};

	return (
		<div className="attackers">
			<h2>Attackers</h2>
			<div>
				<div className="st-cont position-container">
					<h4>Strikers</h4>
					<ul>{renderAttacker("strikers")}</ul>
				</div>
				<div className="wingers-cont position-container">
					<h4>Wingers</h4>
					<ul>{renderAttacker("wingers")}</ul>
				</div>
			</div>
		</div>
	);
};

export default Attackers;
