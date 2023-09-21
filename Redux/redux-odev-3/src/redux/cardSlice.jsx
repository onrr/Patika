import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data.js";


export const shuffle = () => {
	let arr = data.concat(data);
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

export const cardSlice = createSlice({
	name: "card",
	initialState: {
		items: [],
		firstChoice: "",
		secondChoice: "",
		point: 60,
		count: 0,
		gameStatus: "continue",
	},
	reducers: {
		loadCards: (state) => {
			state.items = shuffle();
		},
		setFirstChoice: (state, action) => {
			state.firstChoice = action.payload;
		},
		setSecondChoice: (state, action) => {
			state.secondChoice = action.payload;
		},
		setCount: (state) => {
			state.count += 1;
		},
		setPoint: (state, action) => {
			if (action.payload === "true") state.point += 10;
			else state.point -= 5;
		},
		gameStatus: (state, action) => {
			state.gameStatus = action.payload;
		},
		resetGame: (state) => {
			state.count = 0;
			state.point = 60;
			state.gameStatus = "continue";
			state.items = shuffle();
		},
	},
});

export const { resetGame, setFirstChoice, setSecondChoice, gameStatus, setCount, setPoint, loadCards } = cardSlice.actions;
export default cardSlice.reducer;