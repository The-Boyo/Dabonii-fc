import { getAttackers } from "../../store/fetchData";
import PlayersCard from "./PlayersCard";

const Attackers = () => {
	const attackers = getAttackers();

	const renderAttacker = (pos) => {
		return attackers.map((attacker) => {
			if (attacker.position.includes(pos)) {
				return (
					<li
						className={`dabonii-player ${attacker.name}-${attacker.position}`}
					>
						<PlayersCard player={attacker} />
					</li>
				);
			} else return null;
		});
	};

	return (
		<div className="attackers">
			<h2>Attackers</h2>
			<div>
				<div className="st-cont position-container">
					<h4>Strikers</h4>
					<ul>{renderAttacker("Striker")}</ul>
				</div>
				<div className="wingers-cont position-container">
					<h4>Wingers</h4>
					<ul>{renderAttacker("Winger")}</ul>
				</div>
			</div>
		</div>
	);
};

export default Attackers;
