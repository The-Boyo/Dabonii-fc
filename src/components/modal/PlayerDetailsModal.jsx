import { useSelector } from "react-redux";
import { uniqueImageId } from "../players/PlayersCard";
import "./Modal.css";
import { createPortal } from "react-dom";

const PlayerDetailsModal = ({ onClose, playerData }) => {
	const { players } = useSelector((state) => state.players);

	const alignSpecificPosition = (generalPos) => {
		if (generalPos === "defenders") {
			if (playerData.specificPosition === "Goalkeeper") return "goalkeepers";

			if (playerData.specificPosition === "CB") return "centerBacks";

			if (
				playerData.specificPosition === "RB" ||
				playerData.specificPosition === "LB"
			)
				return "fullbacks";
		} else if (generalPos === "midfielders") {
			if (playerData.specificPosition === "Attacking Midfielder")
				return "AttackingMidfielders";

			if (playerData.specificPosition === "Defensive Midfielder")
				return "DefensiveMidfielders";
		} else if (generalPos === "attackers") {
			if (playerData.specificPosition === "Striker") return "Strikers";
			if (playerData.specificPosition === "Winger") return "Wingers";
		}
	};

	const playerToRender = () => {
		let gottenPlayer;

		players.forEach((player) => {
			if (Object.keys(player)[0] === `${playerData.generalPosition}s`) {
				player[`${playerData.generalPosition}s`].forEach((cur) => {
					if (
						Object.keys(cur)[0] ===
						`${alignSpecificPosition(Object.keys(player)[0])}`
					) {
						gottenPlayer = cur[
							`${alignSpecificPosition(Object.keys(player)[0])}`
						].find((curPlayer) => {
							return curPlayer.name.includes(playerData.name);
						});
					}
				});
			}
		});

		return gottenPlayer;
	};

	const theRenderedPlayer = playerToRender();
	console.log(theRenderedPlayer);

	return createPortal(
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
							Alias: <span>{theRenderedPlayer.alias}</span>
						</p>
						<p>
							Position: <span>{theRenderedPlayer.position}</span>
						</p>
						<p>
							Height: <span>{theRenderedPlayer.height}</span>
						</p>
						<p>
							Strong Foot: <span>{theRenderedPlayer.strongFoot}</span>
						</p>
						<p className="player-emoji">
							Player as Emoji:{" "}
							<span className="player-as-emoji">
								{theRenderedPlayer.emoji}
							</span>{" "}
						</p>
					</div>
					<div className="player-data-games">
						<p>
							Joined: <span>{theRenderedPlayer.joined}</span>
						</p>
						<p>
							Games Played: <span>{theRenderedPlayer.games}</span>
						</p>
						<p>
							Goals: <span>{theRenderedPlayer.goals}</span>
						</p>
						<p>
							Assists <span>{theRenderedPlayer.assists}</span>
						</p>
					</div>
					<div className="player-attributes">
						<p className="player-strengths">
							Strengths: <span>{theRenderedPlayer.strengths}</span>
						</p>
						<p>
							Favourite Move: <span>{theRenderedPlayer.favouriteMove}</span>
						</p>
						<div className="player-insights">
							<h4>Player's Insights</h4>
							<p>{theRenderedPlayer.playerTake}</p>
						</div>
					</div>
				</div>
				<button className="btn-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default PlayerDetailsModal;
