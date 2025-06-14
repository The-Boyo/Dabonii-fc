import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div>
				<h2 className="header_logo">
					fc <span>Dabonii</span>
				</h2>
			</div>
			<div className="nav-bar">
				<h3>Office</h3>
				<h3>Players</h3>
				<h3>Funs</h3>
				<h3>Activities</h3>
				<h3>Matches</h3>
				<h3>Training</h3>
			</div>
			<div className="auth">
				<div>
					<p>SIgn In</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
