import { getOffice } from "../../store/fetchData";
import "./Office.css";

const Office = () => {
	const renderTheOffice = () => {
		const offe = getOffice();

		return offe.map((post) => {
			return (
				<>
					<div className="holder chairman" key={post.id}>
						<img
							src="https://avatar.iran.liara.run/public/boy"
							alt="chair-image"
						/>
						<h2 className="chairman-header holder-header">{post.name}</h2>
						<p className="chairman-title holder-title">{post.position}</p>
					</div>
					<div className="holder vice-chairman">
						<img
							src="https://avatar.iran.liara.run/public/boy"
							alt="vice-chair-image"
						/>
						<h2 className="vice-chairman-header holder-header">
							Robert Sifuma
						</h2>
						<p className="vice-chairman-title holder-title">Vice-Chairman</p>
					</div>
					<div className="sec-tresh">
						<div className="holder treasurer">
							<img
								src="https://avatar.iran.liara.run/public/boy"
								alt="treasurer-image"
							/>
							<h2 className="treasurer-header holder-header">Tom Muriuki</h2>
							<p className="treasurer-title holder-title">Treasurer</p>
						</div>
						<div className="holder organising-secretary">
							<img
								src="https://avatar.iran.liara.run/public/boy"
								alt="chair-image"
							/>
							<h2 className="organising-secretary-header holder-header">
								Walter Masinde
							</h2>
							<p className="organising-secretary-title holder-title">
								Organising-secretary
							</p>
						</div>
						<div className="holder secretary">
							<img
								src="https://avatar.iran.liara.run/public/boy"
								alt="chair-image"
							/>
							<h2 className="secretary-header holder-header">Brian Nyamairi</h2>
							<p className="secretary-title holder-title">Secretary</p>
						</div>
					</div>
				</>
			);
		});
	};

	return (
		<section className="office">
			<h1 className="office-header">The Office</h1>
			<div className="office-holders">{renderTheOffice()}</div>
		</section>
	);
};

export default Office;
