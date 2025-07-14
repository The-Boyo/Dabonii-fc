import { faker } from "@faker-js/faker";

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
				Position:{" "}
				<span>
					{player.position === "Goalkeeper" ? "Goalie" : player.position}
				</span>
			</p>
			<p className="dabonii-player-age">
				Age: <span>{player.age}</span>
			</p>
		</>
	);
};

export default PlayersCard;
