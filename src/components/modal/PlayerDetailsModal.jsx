import { getMidfielders } from "../../store/fetchData";
import { uniqueImageId } from "../players/PlayersCard";
import "./Modal.css";

const midfielders = getMidfielders();

const PlayerDetailsModal = ({ onClose, playerName }) => {
	const theRenderedPlayer = midfielders.find((mid) =>
		mid.name.includes(playerName)
	);

	return (
		<div className="modal-cont">
			<div className="the-modal">
				<h2>Player Information</h2>
				<img
					src={`https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/${uniqueImageId(theRenderedPlayer)}.jpg`}
					alt={`${theRenderedPlayer.name}-image`}
				/>
				<div className="player-data">
					<div className="player-data-personal">
						<p>
							Name: <span>{theRenderedPlayer.name}</span>
						</p>
						<p>
							Alias: <span>Kento</span>
						</p>
						<p>
							Position: <span>{theRenderedPlayer.position}</span>
						</p>
						<p>
							Height: <span>182cm</span>
						</p>
						<p>
							Strong Foot: <span>Left</span>
						</p>
						<p className="player-emoji">
							Player as Emoji: <span className="player-as-emoji">😁</span>{" "}
						</p>
					</div>
					<div className="player-data-games">
						<p>
							Joined: <span>2016</span>
						</p>
						<p>
							Games Played: <span>30</span>
						</p>
						<p>
							Goals: <span>10</span>
						</p>
						<p>
							Assists <span>5</span>
						</p>
					</div>
					<div className="player-attributes">
						<p className="player-strengths">
							Strengths: <span>{theRenderedPlayer.strengths}</span>
						</p>
						<p>
							Favourite Move: <span>The Chop</span>
						</p>
						<div className="player-insights">
							<h4>Player's Insights</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium numquam eius autem quo corporis architecto minus,
								error veniam voluptates fugit at provident itaque doloribus
								illum commodi repellat suscipit. Dolorum, natus.
							</p>
						</div>
					</div>
				</div>
				<button className="btn-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default PlayerDetailsModal;
