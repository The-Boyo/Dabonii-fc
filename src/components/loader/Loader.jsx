import "./Loader.css";

const Loader = () => {
	return (
		<div
			className="loader-cont"
			style={{
				background: "rgba(0,0,0,0.7)",
				position: "absolute",
				top: "0",
				height: "100%",
				minHeight: "150px",
				width: "100%",
				minWidth: "150px",
				display: "grid",
				placeItems: "center",
				color: "white",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1em",
				}}
			>
				<div
					className="loading-spinner"
					style={{
						height: "40px",
						width: "40px",
						borderRadius: "50%",
						border: "2px dashed",
					}}
				></div>
				<p className="loading-para" style={{ fontFamily: "cursive" }}>
					Loading
				</p>
			</div>
		</div>
	);
};

export default Loader;
