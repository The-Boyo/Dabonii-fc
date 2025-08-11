const shortenPositionNames = (pos) => {
	if (pos === "Goalkeeper") return "Goalie";

	if (pos === "Attacking Midfielder") return "AM";

	if (pos === "Defensive Midfielder") return "DM";

	if (pos === "Right Winger") return "RW";

	if (pos === "Left Winger") return "LW";

	return pos;
};

export const uniqueImageId = (player) => {
	if (player.position === "CB") {
		return JSON.parse(player.id) + 20;
	}

	if (player.position === "RB") {
		return JSON.parse(player.id) + 30;
	}

	if (player.position === "LB") {
		return JSON.parse(player.id) + 30;
	}

	if (player.position === "Defensive Midfielder") {
		return JSON.parse(player.id) + 45;
	}

	if (player.position === "Attacking Midfielder") {
		return JSON.parse(player.id) + 60;
	}

	if (player.position === "Striker") {
		return JSON.parse(player.id) + 77;
	}

	if (player.position === "CB") {
		return JSON.parse(player.id) + 90;
	}

	return player.id;
};

const PlayersCard = ({ player }) => {
	return (
		<>
			<img
				className="dabonii-player-image"
				src={`https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/${uniqueImageId(player)}.jpg`}
				alt={`${player.name}-image`}
			/>
			<h3 className="dabonii-player-name">{player.name}</h3>
			<p className="dabonii-player-position">
				Position: <span>{shortenPositionNames(player.position)}</span>
			</p>
			<p className="dabonii-player-age">
				Strength: <span>{player.strengths.split(",")[0]}</span>
			</p>
		</>
	);
};

export default PlayersCard;
