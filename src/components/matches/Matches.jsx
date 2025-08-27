import { Fragment, useEffect } from "react";
import "./Matches.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMatches } from "../../features/matches/matchesSlice";

export const correctDateFormat = (date) => {
	const splitDate = date.split("/");
	console.log(splitDate[1]);
	const theDate = new Date(
		parseInt(splitDate[2]),
		parseInt(splitDate[1]),
		parseInt(splitDate[0])
	);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return `${months[theDate.getMonth() - 1]} ${theDate.getDay()}, ${theDate.getFullYear()}`;
};

const sortMatchesByTimePlayed = (matches) => {
	const sorted = matches.sort(function (a, b) {
		const dateA = a.date.split("/");
		const dateB = b.date.split("/");

		return (
			new Date(dateA[2], dateA[1], dateA[0]).getTime() -
			new Date(dateB[2], dateB[1], dateB[0]).getTime()
		);
	});

	console.log(sorted[0]);

	return sorted;
};

const renderMatchDetails = (match) => {
	console.log(match);
	if (!match.isPlayed) {
		if (match.type === "Tournament")
			return (
				<div className="match-details">
					<h4 className="match-type">{match.type}</h4>
					<p className="match-teams">{match.name}</p>
					<p className="match-date">
						📆 <span>{correctDateFormat(match.date)}</span>
					</p>
					<p className="match-time">
						🕜- <span>{match.time}</span>
					</p>
					<p className="match-venue">
						&#x1F3DF; <span>{match.venue}</span>
					</p>
				</div>
			);
		else {
			return (
				<div className="match-details">
					<h4 className="match-type">{match.type}</h4>
					<p className="match-teams">
						{match.team} 🆚 {match.opponents}
					</p>
					<p className="match-date">
						📆 <span>{correctDateFormat(match.date)}</span>
					</p>
					<p className="match-time">
						🕜- <span>{match.time}</span>
					</p>
					<p className="match-venue">
						&#x1F3DF; - <span>{match.venue}</span>
					</p>
				</div>
			);
		}
	} else {
		if (match.type === "Tournament") {
			return (
				<div className="match-details">
					<h4 className="match-type">{match.type}</h4>
					<p className="match-teams">{match.name}</p>
					<p className="match-results">{match.results}</p>
					<p className="match-date">
						📆 <span>{correctDateFormat(match.date)}</span>
					</p>
					<p className="match-time">
						🕜- <span>{match.time}</span>
					</p>
					<p className="match-venue">
						&#x1F3DF; <span>{match.venue}</span>
					</p>
				</div>
			);
		} else {
			return (
				<div className="match-details">
					<h4 className="match-type">{match.type}</h4>
					<p className="match-teams">
						{match.team} {match.scoreDabonii} - {match.scoreOpponent}{" "}
						{match.opponents}
					</p>
					<p className="match-date">
						📆 <span>{correctDateFormat(match.date)}</span>
					</p>
					<p className="match-time">
						🕜- <span>{match.time}</span>
					</p>
					<p className="match-venue">
						&#x1F3DF; - <span>{match.venue}</span>
					</p>
				</div>
			);
		}
	}
};

const renderUpcomingMatches = (matches) => {
	return matches.map((match) => {
		return <Fragment key={match.id}>{renderMatchDetails(match)}</Fragment>;
	});
};

const renderBiggestWinLoss = (matches, result) => {
	if (result === "win") {
		const biggestWin = matches.find((match) => match.biggestWin);
		return renderMatchDetails(biggestWin);
	} else {
		const biggestLoss = matches.find((match) => match.biggestLoss);
		return renderMatchDetails(biggestLoss);
	}
};

const Matches = () => {
	const matches = useSelector((state) => state.matches.matches);
	const dispatch = useDispatch();
	console.log(matches);

	const upcomingMatches = matches.filter((match) => !match.isPlayed);

	const playedMatches = matches.filter((match) => match.isPlayed);

	let sortedUpcomingMatches = [];
	let sortedPlayedMatches = [];

	if (upcomingMatches.length > 0) {
		sortedUpcomingMatches = sortMatchesByTimePlayed(upcomingMatches);
	}

	if (playedMatches.length > 0) {
		sortedPlayedMatches = sortMatchesByTimePlayed(playedMatches);
	}

	useEffect(() => {
		dispatch(fetchAllMatches());
	}, [dispatch]);

	return (
		<section className="content matches">
			<div className="next-match">
				<h2>Next Match</h2>
				{sortedUpcomingMatches.length > 0
					? renderMatchDetails(sortedUpcomingMatches[0])
					: null}
			</div>
			<div className="match-schedule">
				<h2>Upcoming Matches</h2>
				<div>
					{sortedUpcomingMatches.length > 0
						? renderUpcomingMatches(sortedUpcomingMatches)
						: null}
				</div>
			</div>
			<div className="match-list">
				<div className="last-match">
					<h2>Last Match</h2>
					{sortedPlayedMatches.length > 0
						? renderMatchDetails(
								sortedPlayedMatches[sortedPlayedMatches.length - 1]
							)
						: null}
				</div>
				<div className="biggest-win">
					<h2>Biggest Win</h2>
					{sortedPlayedMatches.length > 0
						? renderBiggestWinLoss(sortedPlayedMatches, "win")
						: null}
				</div>
				<div className="biggest-loss">
					<h2>Biggest Loss</h2>
					{sortedPlayedMatches.length > 0
						? renderBiggestWinLoss(sortedPlayedMatches, "loss")
						: null}
				</div>
			</div>
		</section>
	);
};

export default Matches;
