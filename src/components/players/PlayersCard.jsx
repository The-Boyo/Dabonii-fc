import { faker } from "@faker-js/faker";

const shortenPositionNames = (pos) => {
	if (pos === "Goalkeeper") return "Goalie";

	if (pos === "Attacking Midfielder") return "AM";

	if (pos === "Defensive Midfielder") return "DM";

	if (pos === "Right Winger") return "RW";

	if (pos === "Left Winger") return "LW";

	return pos;
};

const getImages = () => {
	return faker.image.personPortrait({ sex: "male" });
};

const PlayersCard = ({ player }) => {
	console.log(player);
	return (
		<>
			<img
				className="dabonii-player-image"
				// src={faker.image.personPortrait({ sex: "male" })}
				src={getImages()}
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
