import { getMidfielders } from "../../store/fetchData";
import PlayersCard from "./PlayersCard";

const Midfielders = () => {
	const midfielders = getMidfielders();

	const renderMidfielders = (pos) => {
		return midfielders.map((mida) => {
			if (pos === mida.position) {
				return (
					<li className={`dabonii-player ${mida.name}-${mida.position}`}>
						<PlayersCard player={mida} />
					</li>
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
