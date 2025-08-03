import "./Modal.css";

const PlayerDetailsModal = ({ onClose }) => {
	return (
		<div className="modal-cont">
			<div className="theModal">
				<h2>Player Information</h2>
				<div></div>
				<button className="btn-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default PlayerDetailsModal;
