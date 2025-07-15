export const getOffice = () => {
	return [
		{
			id: 1,
			name: "Kevin Sialenga",
			position: "Chairman",
			photo: "photo-chair",
		},
		{
			id: 2,

			name: "Boniface Ngwili",
			position: "Patron",
			photo: "patron-photo",
		},
		{
			id: 3,

			name: "Robert Sifuma",
			position: "Vice Chairman",
			photo: "photo-vice-chair",
		},
		{
			id: 4,

			name: "Tom Muriuki",
			position: "Treasurer",
			photo: "photo-treasurer",
			helper: [
				{
					id: 4.1,

					name: "Eshbon Ngotho",
					position: "Assistant Treasurer",
					photo: "photo-treasurer",
				},
			],
		},
		{
			id: 5,

			name: "Walter Masinde",
			position: "Organising Secretary",
			photo: "photo-organising-secretary",
			helper: [
				{
					id: 5.1,

					name: "Kennedy Atendo",
					position: "Assistant Organising Secretary",
					photo: "photo-asst-org-1",
				},
				{
					id: 5.2,

					name: "Anderson Ajore",
					position: "Assistant Organising Secretary",
					photo: "photo-asst-org-2",
				},
			],
		},
		{
			id: 6,

			name: "Brian Nyamairi",
			position: "Secretary",
			photo: "photo-secretary",
			helper: [
				{
					id: 6.1,

					name: "Dennis Andale",
					position: "Assistant Secretary",
					photo: "photo-secretary",
				},
			],
		},
		{
			id: 7,

			name: "Fredrick Mogaka",
			position: "Team Manager",
			photo: "photo-team-manager",
		},
		{
			honourableMembers: [
				{
					id: 8,

					name: "Samuel Njoroge",
					position: "Member",
					photo: "photo-member-1",
				},
				{
					id: 9,

					name: "Eric Karin",
					position: "Member",
					photo: "photo-member-2",
				},
				{
					id: 10,

					name: "Kevin Wambugu",
					position: "Member",
					photo: "photo-member-3",
				},
				{
					id: 11,

					name: "Joseph Ngina",
					position: "Member",
					photo: "photo-member-4",
				},
				{
					id: 12,

					name: "Martin Mbaya",
					position: "Member",
					photo: "photo-member-5",
				},
			],
		},
	];
};

/**DEFENDERS DATA */
export const getCenterBacks = () => {
	return [
		{ name: "Samuel Njoroge", age: 37, position: "CB", id: 1 },
		{ name: "Elijah Owino", age: 29, position: "CB", id: 2 },
		{ name: "Eutychus", age: 20, position: "CB", id: 3 },
		{ name: "Alex Mwangi", age: 34, position: "CB", id: 4 },
		{ name: "Joseph Ngina", age: 39, position: "CB", id: 5 },
		{ name: "Lwanga Viketi", age: 43, position: "CB", id: 6 },
		{ name: "Robert Sifuma", age: 40, position: "CB", id: 7 },
		{ name: "Idris", age: 31, position: "CB", id: 8 },
	];
};

export const getFullbacks = () => {
	return [
		{ name: "Joshua Junior", age: "28", position: "RB", id: 1 },
		{ name: "Omanyala Oma", age: "23", position: "RB", id: 2 },
		{ name: "Eshbon Moha", age: "35", position: "LB", id: 3 },
		{ name: "Martin Mbaya", age: "38", position: "RB", id: 4 },
		{ name: "Dan Lumiti", age: "31", position: "RB", id: 5 },
		{ name: "Chris Jadolo", age: "40", position: "RB", id: 6 },
		{ name: "Clinton Bukele", age: "26", position: "LB", id: 7 },
		{ name: "Mugesto", age: "25", position: "RB", id: 8 },
	];
};

export const getGoalkeepers = () => {
	return [
		{ name: "Allan Allano", age: 31, position: "Goalkeeper", id: 1 },
		{ name: "Collins Collo", age: 17, position: "Goalkeeper", id: 2 },
		{ name: "Jagoal", age: 23, position: "Goalkeeper", id: 3 },
	];
};

/**MIDFIELERS DATA */

export const getMidfielders = () => {
	return [
		{
			name: "Kennedy Atendo",
			age: "31",
			position: "Attacking Midfielder",
			id: 1,
			strengths: "speed, shooting, Dribbling",
			personality: "joker",
		},
		{
			name: "Pepe",
			age: "35",
			position: "Attacking Midfielder",
			id: 2,
			strengths: "Passing, shooting, Dribbling",
			personality: "Competent",
		},
		{
			name: "Constant Mulah",
			age: "34",
			position: "Defensive Midfielder",
			id: 3,
			strengths: "Tough, Stamina",
			personality: "Tenacious",
		},
		{
			name: "Eliud",
			age: "30",
			position: "Attacking Midfielder",
			id: 4,
			strengths: "Vision, Passing, Dribbling",
			personality: "Compassionate",
		},
		{
			name: "Ojalo",
			age: "24",
			position: "Defensive Midfielder",
			id: 5,
			strengths: "Tackling, Passing",
			personality: "Humble",
		},
		{
			name: "Cecil",
			age: "24",
			position: "Attacking Midfielder",
			id: 5,
			strengths: "Speed, Passing, Dribbling",
			personality: "Outgoing",
		},
		{
			name: "Kibe",
			age: "32",
			position: "Defensive Midfielder",
			id: 5,
			strengths: "Stamina, Shooting, Dribbling",
			personality: "Courageous",
		},
	];
};

export const getAttackers = () => {
	return [
		{
			name: "Walter Masinde",
			age: "42",
			position: "Striker",
			id: 1,
			strengths: "Strength, Finishing, Eye-for-goal",
			personality: "Easy-going",
		},
		{
			name: "Mzee Bonnie",
			age: "58",
			position: "Striker",
			id: 2,
			strengths: "First Touch, Dribbling, Passing",
			personality: "Compassion",
		},
		{
			name: "Tom Muriuki",
			age: "36",
			position: "Striker",
			id: 3,
			strengths: "Strength, Very Agile, Eye-for-goal",
			personality: "Friendly",
		},
		{
			name: "Anderson Ajore",
			age: "40",
			position: "Right Winger",
			id: 4,
			strengths: "Shooting, Dribbling",
			personality: "Competent",
		},
		{
			name: "Eliud Oboya",
			age: "32",
			position: "Striker",
			id: 5,
			strengths: "Dribbling, Passing, Strength",
			personality: "Outgoing",
		},
	];
};
