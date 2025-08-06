import { getMidfielders } from "../../store/fetchData";
import { getImages } from "../players/PlayersCard";
import "./Modal.css";

const midfielders = getMidfielders();

const PlayerDetailsModal = ({ onClose, playerName }) => {
	const theRenderedPlayer = midfielders.find((mid) =>
		mid.name.includes(playerName)
	);

	console.log(theRenderedPlayer);

	return (
		<div className="modal-cont">
			<div className="theModal">
				<h2>Player Information</h2>
				<div className="player-data">
					<div className="player-data-personal">
						<img src={getImages()} alt="" />
						<h3>{theRenderedPlayer.name}</h3>
					</div>
					<div className="player-data-games"></div>
				</div>
				<div className="player-attributes"></div>
				<button className="btn-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default PlayerDetailsModal;
