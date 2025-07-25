import { faker } from "@faker-js/faker";

import { getOffice } from "../../store/fetchData";
import "./Office.css";
import { useEffect } from "react";

const Office = () => {
	useEffect(() => {
		console.log(document.querySelector(".content"));
	});

	const renderTheOffice = () => {
		const offe = getOffice();

		return (
			<>
				<div className="holder chairman" key={offe[0].id}>
					<img
						src={faker.image.personPortrait({ sex: "male" })}
						alt="chair-image"
					/>
					<h2 className="chairman-header holder-header">{offe[0].name}</h2>
					<p className="chairman-title holder-title">{offe[0].position}</p>
				</div>
				<div className="holder vice-chairman">
					<img
						src={faker.image.personPortrait({ sex: "male" })}
						alt="vice-chair-image"
					/>
					<h2 className="vice-chairman-header holder-header">Robert Sifuma</h2>
					<p className="vice-chairman-title holder-title">Vice-Chairman</p>
				</div>
				<div className="sec-tresh">
					<div className="holder treasurer">
						<img
							src={faker.image.personPortrait({ sex: "male" })}
							alt="treasurer-image"
						/>
						<h2 className="treasurer-header holder-header">Tom Muriuki</h2>
						<p className="treasurer-title holder-title">Treasurer</p>
					</div>
					<div className="holder organising-secretary">
						<img
							src={faker.image.personPortrait({ sex: "male" })}
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
							src={faker.image.personPortrait({ sex: "male" })}
							alt="chair-image"
						/>
						<h2 className="secretary-header holder-header">Brian Nyamairi</h2>
						<p className="secretary-title holder-title">Secretary</p>
					</div>
				</div>
				<div className="assist-sec-tresh">
					<div className="holder assistant assist-treasurer">
						<img
							src={faker.image.personPortrait({ sex: "male" })}
							alt="assist-treasurer-image"
						/>
						<h2 className="assist-treasurer-header holder-header">
							Eshbon Ngotho
						</h2>
						<p className="assist-treasurer-title holder-title">
							Assistant Treasurer
						</p>
					</div>
					<div className="holder assistant assist-organising-secretary">
						<img
							src={faker.image.personPortrait({ sex: "male" })}
							alt="assist-organising-secretary-image"
						/>
						<h2 className="assist-organising-secretary-header holder-header">
							Kennedy Atendo
						</h2>
						<p className="assist-organising-secretary-title holder-title">
							Assistant Organising-Secretary
						</p>
					</div>
					<div className="holder assistant assistant-secretary">
						<img
							src={faker.image.personPortrait({ sex: "male" })}
							alt="assistant-secretary-image"
						/>
						<h2 className="assistant-secretary-header holder-header">
							Eric Muiruri
						</h2>
						<p className="assistant-secretary-title holder-title">
							Assistant Secretary
						</p>
					</div>
				</div>
				<div className="other-holders-cont">
					<div className="other-holders">
						<div className="holder team-manager">
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="team-manager-image"
							/>
							<h2 className="team-manager-header holder-header">
								Fredrick Ochora
							</h2>
							<p className="team-manager-title holder-title">Team Manager</p>
						</div>
						<div className="holder coach">
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="coach-image"
							/>
							<h2 className="coach-header holder-header">Constant Mula</h2>
							<p className="coach-title holder-title">Coach</p>
						</div>
						<div className="holder discipline-master">
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="discipline-master-image"
							/>
							<h2 className="discipline-master-header holder-header">
								Martin Mbaite
							</h2>
							<p className="discipline-master-title holder-title">
								Discipline Master
							</p>
						</div>
						<div className="holder fitness">
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="fitness-image"
							/>
							<h2 className="fitness-header holder-header">Samuel Njoroge</h2>
							<p className="fitness-title holder-title">Fitness</p>
						</div>
						<div className="holder kit-manager">
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="kit-manager-image"
							/>
							<h2 className="kit-manager-header holder-header">Eric Muiruri</h2>
							<p className="kit-manager-title holder-title">Kit Manager</p>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<section className="content office">
			<h1 className="office-header">The Office</h1>
			<div className="office-holders">{renderTheOffice()}</div>
		</section>
	);
};

export default Office;
