import {faker} from '@faker-js/faker'

import { getOffice } from "../../store/fetchData";
import "./Office.css";

const Office = () => {
	const renderTheOffice = () => {
		const offe = getOffice();

		return (
			<>
				<div className="holder chairman" key={offe[0].id}>
					<img
						src={faker.image.personPortrait({sex:'male'})}
						alt="chair-image"
					/>
					<h2 className="chairman-header holder-header">{offe[0].name}</h2>
					<p className="chairman-title holder-title">{offe[0].position}</p>
				</div>
				<div className="holder vice-chairman">
					<img
						src={faker.image.personPortrait({sex:'male'})}
						alt="vice-chair-image"
					/>
					<h2 className="vice-chairman-header holder-header">Robert Sifuma</h2>
					<p className="vice-chairman-title holder-title">Vice-Chairman</p>
				</div>
				<div className="sec-tresh">
					<div className="holder treasurer">
						<img
						src={faker.image.personPortrait({sex:'male'})}
							alt="treasurer-image"
						/>
						<h2 className="treasurer-header holder-header">Tom Muriuki</h2>
						<p className="treasurer-title holder-title">Treasurer</p>
					</div>
					<div className="holder organising-secretary">
						<img
							src={faker.image.personPortrait({sex:'male'})}
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
						src={faker.image.personPortrait({sex:'male'})}
							alt="chair-image"
						/>
						<h2 className="secretary-header holder-header">Brian Nyamairi</h2>
						<p className="secretary-title holder-title">Secretary</p>
					</div>
				</div>
			</>
		);
	};

	return (
		<section className="office">
			<h1 className="office-header">The Office</h1>
			<div className="office-holders">{renderTheOffice()}</div>
		</section>
	);
};

export default Office;
