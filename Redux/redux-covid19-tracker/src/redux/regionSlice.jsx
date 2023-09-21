import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchRegion = createAsyncThunk(
    "region/getRegion",
    async () => {
        const res = await axios(
            `https://covid-api.com/api/regions?order=iso&sort=asc`
        );
        return res.data;
    }
);


export const regionSlice = createSlice({
    name: 'region',
    initialState: {
        country: [],
        status: 'idle',
        selected: '',
    },
    reducers: {
        select: (state, action) => {
            state.selected = action.payload;
        },
    },
    extraReducers: {
        [fetchRegion.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchRegion.fulfilled]: (state, action) => {
            state.country = action.payload
            state.status = 'succeedded'
        },
        [fetchRegion.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
})

export const { select } = regionSlice.actions;

export default regionSlice.reducer;