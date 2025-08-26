import { configureStore } from "@reduxjs/toolkit";

import contentHeightState from "../features/contentHeight/contentHeightSlice";
import allPlayers from "../features/playersSlice/playersSlice";
import allMatches from "../features/matches/matchesSlice";

export default configureStore({
	reducer: {
		contentHeight: contentHeightState,
		players: allPlayers,
		matches: allMatches,
	},
});
