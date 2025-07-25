import { createSlice } from "@reduxjs/toolkit";

const initialState = 300;

const contentHeightSlice = createSlice({
	name: "contentHeight",
	initialState,
	reducers: {
		getContentHeight(state, payload) {
			return payload;
		},
	},
});

export const { getContentHeight } = contentHeightSlice.actions;

export default contentHeightSlice.reducer;
