import { faker } from "@faker-js/faker";
import {
	getCenterBacks,
	getFullbacks,
	getGoalkeepers,
} from "../../store/fetchData";

const Defenders = () => {
	const goalkeepers = getGoalkeepers();
	const centerBacks = getCenterBacks();
	const fullbacks = getFullbacks();

	const renderGoalkeepers = () => {
		return goalkeepers.map((keeper) => {
			return (
				<li className="the-center-back defender-profile" key={keeper.id}>
					<img
						src={faker.image.personPortrait({ sex: "male" })}
						alt={`${keeper.name}-image`}
					/>
					<h3 className="center-back-name">{keeper.name}</h3>
					<p className="center-back-position">
						Position: <span>{keeper.position}</span>
					</p>
					<p className="center-back-age">
						Age: <span>{keeper.age}</span>
					</p>
				</li>
			);
		});
	};

	const renderCenterBacks = () => {
		return centerBacks.map((cb) => {
			return (
				<li className="the-center-back defender-profile" key={cb.id}>
					<img
						src={faker.image.personPortrait({ sex: "male" })}
						alt={`${cb.name}-image`}
					/>
					<h3 className="center-back-name">{cb.name}</h3>
					<p className="center-back-position">
						Position: <span>{cb.position}</span>
					</p>
					<p className="center-back-age">
						Age: <span>{cb.age}</span>
					</p>
				</li>
			);
		});
	};

	const renderFullbacks = () => {
		return fullbacks.map((fb) => {
			return (
				<li className="the-fullback defender-profile" key={fb.id}>
					<img
						src={faker.image.personPortrait({ sex: "male" })}
						alt={`${fb.name}-image`}
					/>
					<h3 className="fullback-name">{fb.name}</h3>
					<p className="fullback-position">
						Position: <span>{fb.position}</span>
					</p>
					<p className="fullback-age">
						Age: <span>{fb.age}</span>
					</p>
				</li>
			);
		});
	};

	return (
		<div className="defenders">
			<h2>Defenders</h2>
			<div>
				<div className="goalkeepers-cont">
					<h4>GoalKeepers</h4>
					<ul>{renderGoalkeepers()}</ul>
				</div>
				<div className="center-backs-cont">
					<h4>Center-Backs</h4>
					<ul>{renderCenterBacks()}</ul>
				</div>
				<div className="fullbacks-cont">
					<h4>Fullbacks</h4>
					<ul>{renderFullbacks()}</ul>
				</div>
			</div>
		</div>
	);
};

export default Defenders;
