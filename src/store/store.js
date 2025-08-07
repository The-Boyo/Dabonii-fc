import { configureStore } from "@reduxjs/toolkit";

import contentHeightState from "../features/contentHeight/contentHeightSlice";
import allPlayers from "../features/playersSlice/playersSlice";

export default configureStore({
	reducer: {
		contentHeight: contentHeightState,
		players: allPlayers,
	},
});
