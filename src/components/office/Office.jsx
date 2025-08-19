import { faker } from "@faker-js/faker";

import { getOffice } from "../../store/fetchData";
import "./Office.css";
import { Fragment, useEffect } from "react";

const offe = getOffice();

const Office = () => {
	useEffect(() => {
		console.log(document.querySelector(".content"));
	});

	console.log(offe);

	const toBeRendered = (pos) => {
		return offe.map((office) => {
			if (Array.isArray(office["members"]) && pos === "members") {
				return office["members"].map((cur) => {
					console.log(cur);
					return (
						<div className={`holder ${cur.position}`} key={cur.id}>
							<img
								src={faker.image.personPortrait({ sex: "male" })}
								alt="chair-image"
							/>
							<h2 className="chairman-header holder-header">{cur.name}</h2>
							<p className="chairman-title holder-title">{cur.position}</p>
						</div>
					);
				});
			}

			if (pos === office.position) {
				return (
					<Fragment key={office.id}>
						<img
							src={faker.image.personPortrait({ sex: "male" })}
							alt={`${office.position}-image`}
						/>
						<h2 className="chairman-header holder-header">{office.name}</h2>
						<p className="chairman-title holder-title">{office.position}</p>
					</Fragment>
				);
			}

			return null;
		});
	};

	const renderTheOffice = () => {
		return (
			<>
				<div className={`holder chairman`}>{toBeRendered("Chairman")}</div>
				<div className="holder vice-chairman">
					{toBeRendered("Vice Chairman")}
				</div>
				<div className="sec-tresh">
					<div className="holder treasurer">{toBeRendered("Treasurer")}</div>
					<div className="holder organising-secretary">
						{toBeRendered("Organising Secretary")}
					</div>
					<div className="holder secretary">{toBeRendered("Secretary")}</div>
				</div>
				<div className="assist-sec-tresh">
					<div className="holder assistant assist-treasurer">
						{toBeRendered("Assistant Treasurer")}
					</div>
					<div className="holder assistant assist-organising-secretary">
						{toBeRendered("Assistant Organising Secretary")}
					</div>
					<div className="holder assistant assistant-secretary">
						{toBeRendered("Assistant Secretary")}
					</div>
				</div>
				<div className="other-holders">
					<div className="holder team-manager">
						{toBeRendered("Team Manager")}
					</div>
					<div className="holder coach">{toBeRendered("Head Coach")}</div>
					<div className="holder discipline-master">
						{toBeRendered("Discipline Master")}
					</div>
					<div className="holder fitness">{toBeRendered("Fitness Coach")}</div>
					<div className="holder kit-manager">
						{toBeRendered("Kit Manager")}
					</div>
				</div>
				<div className="honourable-members">{toBeRendered("members")}</div>
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
