import "./Matches.css";

const renderMatchDetails = (match) => {
	if (match === "next") {
		return (
			<div className="match-details">
				<h4 className="match-type">Friendly</h4>
				<p className="match-teams">Dabonii 🆚 Bluestars fc</p>
				<p className="match-date">
					📆 <span>August 24, 2025</span>
				</p>
				<p className="match-time">
					🕜- <span>9:00 am</span>
				</p>
				<p className="match-venue">
					&#x1F3DF; <span>Stima Club</span>
				</p>
			</div>
		);
	} else {
		return (
			<div className="match-details">
				<h4 className="match-type">Friendly</h4>
				<p className="match-teams">Dabonii 2 - 1 Bluestars fc</p>
				<p className="match-date">
					📆 <span>August 10, 2025</span>
				</p>
				<p className="match-time">
					🕜- <span>9:00 am</span>
				</p>
				<p className="match-venue">
					&#x1F3DF; - <span>KCB Sports Club</span>
				</p>
			</div>
		);
	}
};

const Matches = () => {
	return (
		<section className="content matches">
			<div className="next-match">
				<h2>Next Match</h2>
				{renderMatchDetails("next")}
			</div>
			<div className="match-list">
				<div className="last-match">
					<h2>Last Match</h2>
					{renderMatchDetails("last")}
				</div>
				<div className="biggest-win">
					<h2>Biggest Win</h2>
					{renderMatchDetails("win")}
				</div>
				<div className="biggest-loss">
					<h2>Biggest Loss</h2>
					{renderMatchDetails("loss")}
				</div>
			</div>
			<div className="match-schedule">
				<h2>Upcoming Matches</h2>
			</div>
		</section>
	);
};

export default Matches;
