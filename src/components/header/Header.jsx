import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	// State Hooks
	const [navbarState, setNavBar] = useState(false);
	const [headerWidth, setHeaderWidth] = useState(null);

	// Refs
	const headerRef = useRef();
	const createOpenCloseRef = useRef();
	const navRef = useRef();

	// Locations Hook
	const location = useLocation();

	useEffect(() => {
		const handleBodyScroll = () => {
			if (window.scrollY > 0) {
				headerRef.current.style.position = "fixed";
			} else {
				headerRef.current.style.position = "relative";
			}
		};

		const headerResizeObserver = new ResizeObserver(() => {
			if (headerRef.current.getBoundingClientRect().width > 700) {
				setNavBar(false);
			}
			setHeaderWidth(headerRef.current.getBoundingClientRect().width);
		});

		if (headerWidth >= 700) {
			navRef.current.style.display = "grid";
			setNavBar(false);
		} else {
			navRef.current.style.display = "none";
		}

		headerResizeObserver.observe(headerRef.current);

		window.addEventListener("scroll", handleBodyScroll);

		return () => {
			window.removeEventListener("scroll", handleBodyScroll);
			headerResizeObserver.disconnect();
		};
	}, [headerWidth]);

	const handleOpenCloseClick = () => {
		console.log(navbarState);
		if (navbarState) {
			navRef.current.style.display = "none";
			setNavBar(false);
		} else {
			navRef.current.style.display = "grid";
			setNavBar(true);
		}
	};

	const renderNavbar = () => {
		return (
			<div className="nav-bar" ref={navRef}>
				<Link to={"/"}>
					<h3
						className={`nav_elem nav_fans ${location.pathname === "/" ? "active_nav-bar" : ""}`}
					>
						Home
					</h3>
				</Link>
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
				<Link to={`/about`}>
					<h3
						className={`nav_elem nav_training ${location.pathname.includes("about") ? "active_nav-bar" : ""}`}
					>
						About
					</h3>
				</Link>
			</div>
		);
	};

	return (
		<header className="header" ref={headerRef}>
			<h2 className="header_logo">
				<Link to={"/"} className="header_logo-link">
					fc <span>Dabonii</span>
				</Link>
			</h2>
			{renderNavbar()}
			{/* <div className="auth">
				<button className="sign-in">Sign In</button>
			</div> */}
			<div
				className="button_open-close"
				onClick={handleOpenCloseClick}
				ref={createOpenCloseRef}
			>
				<div className="open_close-1"></div>
				<div className="open_close-2"></div>
				<div className="open_close-3"></div>
			</div>
		</header>
	);
};

export default Header;
