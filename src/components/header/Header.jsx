import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h2 className="header_logo">
				<Link to={"/"}>
					fc <span>Dabonii</span>
				</Link>
			</h2>
			<div className="nav-bar">
				<Link to={"/office"}>
					<h3 className="nav_elem nav_office">Office</h3>
				</Link>
				<Link to={"/players"}>
					<h3 className="nav_elem nav_players">Players</h3>
				</Link>
				<Link to={"/fans"}>
					<h3 className="nav_elem nav_fans">Fans</h3>
				</Link>
				<Link to={"/events"}>
					<h3 className="nav_elem nav_events">Events</h3>
				</Link>
				<Link to={"/matches"}>
					<h3 className="nav_elem nav_matches">Matches</h3>
				</Link>
				<Link to={"/training"}>
					<h3 className="nav_elem nav_training">Training</h3>
				</Link>
			</div>
			<div className="auth">
				<button className="sign-in">Sign In</button>
			</div>
		</header>
	);
};

export default Header;
