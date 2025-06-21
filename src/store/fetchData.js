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
