import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const breweriesSlice = createSlice({
    name: 'breweries',
    initialState: {
        breweries: [],
        someOtherPieceOfState: null,
    },
    reducers: {
        setBreweries: (state, action) => {
            state.breweries = action.payload;
        },
    },
});

// actions
export const {
    setBreweries,
} = breweriesSlice.actions;

// selectors
export const selectBreweries = state => state.breweries.breweries;

export default breweriesSlice.reducer;