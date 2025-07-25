import { configureStore } from "@reduxjs/toolkit";

import contentHeightState from "../features/contentHeight/contentHeightSlice";

export default configureStore({
	reducer: {
		contentHeight: contentHeightState,
	},
});
