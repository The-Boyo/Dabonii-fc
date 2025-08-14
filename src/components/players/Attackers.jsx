import { useSelector } from "react-redux";
import PlayersCard from "./PlayersCard";
import { handlePlayerCardClick } from "./Midfielders";
import { useModal } from "../../hooks/useModal";
import { showModal } from "./Defenders";
import { Fragment } from "react/jsx-runtime";

const Attackers = () => {
	// Custom Hook
	const [isPortalOpen, setPortal, thePlayerName, setPlayerName] = useModal();

	const { players } = useSelector((state) => state.players);

	const attackers = players.find(
		(thePlayers) => Object.keys(thePlayers)[0] === "attackers"
	);

	const handleAttackerClick = (e, playerPos, generalPosition) => {
		handlePlayerCardClick(
			e,
			playerPos,
			generalPosition,
			setPortal,
			setPlayerName
		);
	};

	const renderAttacker = (pos) => {
		return attackers.attackers.map((attack) => {
			if (Object.keys(attack)[0] === pos) {
				return attack[pos].map((theAttacker) => {
					return (
						<Fragment key={`${theAttacker.name}-${theAttacker.id}`}>
							<li
								onClick={(e) =>
									handleAttackerClick(e, theAttacker.position, "attacker")
								}
								className={`dabonii-player ${theAttacker.name}-${theAttacker.position}`}
							>
								<PlayersCard player={theAttacker} />
							</li>
							{showModal(
								theAttacker.name,
								isPortalOpen,
								thePlayerName,
								setPortal
							)}
						</Fragment>
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
