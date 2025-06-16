import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<h3 className="footer_para">
				All Rights Reserved &#169; Dabonii Football Club{" "}
				{new Date(Date.now()).getFullYear()}
			</h3>
		</footer>
	);
};

export default Footer;
