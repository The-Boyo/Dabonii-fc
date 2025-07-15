import { faker } from "@faker-js/faker";

const shortenPositionNames = (pos) => {
	if (pos === "Goalkeeper") return "Goalie";

	if (pos === "Attacking Midfielder") return "AM";

	if (pos === "Defensive Midfielder") return "DM";

	if (pos === "Right Winger") return "RW";

	if (pos === "Left Winger") return "LW";

	return pos;
};

const PlayersCard = ({ player }) => {
	return (
		<>
			<img
				className="dabonii-player-image"
				src={faker.image.personPortrait({ sex: "male" })}
				alt={`${player.name}-image`}
			/>
			<h3 className="dabonii-player-name">{player.name}</h3>
			<p className="dabonii-player-position">
				Position: <span>{shortenPositionNames(player.position)}</span>
			</p>
			<p className="dabonii-player-age">
				Age: <span>{player.age}</span>
			</p>
		</>
	);
};

export default PlayersCard;
