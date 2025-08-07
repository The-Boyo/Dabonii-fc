import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
import { getAllPlayers } from "../../store/fetchData";

const initialState = {
	players: [],
	status: "idle",
};

// const fetchPlayers = createAsyncThunk("players", async () => {
// 	const response = await getAllPlayers();
// });

const PlayersSlice = createSlice({
	name: "players",
	initialState,
	reducers: {
		fetchPlayers: function (state) {
			state.players = getAllPlayers();
			state.status = "success";
		},
	},
});

export const { fetchPlayers } = PlayersSlice.actions;

export default PlayersSlice.reducer;
