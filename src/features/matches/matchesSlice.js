import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMatches } from "../../store/fetchData";

const initialState = {
	matches: [],
};

export const fetchMatches = createAsyncThunk("fetchMatches", async () => {
	const response = await getAllMatches();

	return response;
});

const MatchesSlice = createSlice({
	name: "matches",
	initialState,
	reducers: {
		fetchAllMatches(state) {
			state.matches = getAllMatches();
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMatches.fulfilled, (state, action) => {
			state.matches = action.payload;
		});
	},
});

export const { fetchAllMatches } = MatchesSlice.actions;

export default MatchesSlice.reducer;
