import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef } from "react";

const Header = () => {
	const headerRef = useRef();

	const location = useLocation();

	useEffect(() => {
		const handleBodyScroll = () => {
			console.log("body has scrolled...");
			console.log(window.scrollY);

			if (window.scrollY > 0) {
				headerRef.current.style.position = "fixed";
			} else {
				headerRef.current.style.position = "relative";
			}
		};

		window.addEventListener("scroll", handleBodyScroll);

		return () => window.removeEventListener("scroll", handleBodyScroll);
	});

	return (
		<header className="header" ref={headerRef}>
			<h2 className="header_logo">
				<Link to={"/"} className="header_logo-link">
					fc <span>Dabonii</span>
				</Link>
			</h2>
			<div className="nav-bar">
				<Link to={"/office"}>
					<h3
						className={`nav_elem nav_office ${location.pathname.includes("office") ? "active_nav-bar" : ""}`}
					>
						Office
					</h3>
				</Link>
				<Link to={"/players"}>
					<h3
						className={`nav_elem nav_players ${location.pathname.includes("players") ? "active_nav-bar" : ""} `}
					>
						Players
					</h3>
				</Link>
				<Link to={"/fans"}>
					<h3
						className={`nav_elem nav_fans ${location.pathname.includes("fans") ? "active_nav-bar" : ""}`}
					>
						Fans
					</h3>
				</Link>
				<Link to={"/events"}>
					<h3
						className={`nav_elem nav_events ${location.pathname.includes("events") ? "active_nav-bar" : ""}`}
					>
						Events
					</h3>
				</Link>
				<Link to={"/matches"}>
					<h3
						className={`nav_elem nav_matches ${location.pathname.includes("matches") ? "active_nav-bar" : ""}`}
					>
						Matches
					</h3>
				</Link>
				<Link to={"/training"}>
					<h3
						className={`nav_elem nav_training ${location.pathname.includes("training") ? "active_nav-bar" : ""}`}
					>
						Training
					</h3>
				</Link>
			</div>
			<div className="auth">
				<button className="sign-in">Sign In</button>
			</div>
		</header>
	);
};

export default Header;
