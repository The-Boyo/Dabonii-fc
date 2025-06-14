import "./Header.css";

const Header = () => {
	const handleNavClick = (e) => {
		const theClassName = e.target.className.split(" ")[1];

		if (theClassName === "office") {
		}
	};

	return (
		<header className="header">
			<div>
				<h2 className="header_logo">
					fc <span>Dabonii</span>
				</h2>
			</div>
			<div className="nav-bar">
				<h3 onClick={handleNavClick} className="nav_elem office">
					Office
				</h3>
				<h3 onClick={handleNavClick} className="nav_elem players">
					Players
				</h3>
				<h3 onClick={handleNavClick} className="nav_elem fans">
					Fans
				</h3>
				<h3 onClick={handleNavClick} className="nav_elem activities">
					Activities
				</h3>
				<h3 onClick={handleNavClick} className="nav_elem matches">
					Matches
				</h3>
				<h3 onClick={handleNavClick} className="nav_elem training">
					Training
				</h3>
			</div>
			<div className="auth">
				<button className="sign-in">Sign In</button>
			</div>
		</header>
	);
};

export default Header;
