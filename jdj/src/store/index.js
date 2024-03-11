'use client'

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialColorCode = {
    isLight: true
}

const colorCodeSlice = createSlice({
    initialState: initialColorCode,
    name: "colorCode",
    reducers: {
        colorCodeToggle(state) {
            state.isLight = !state.isLight;
        }
    }
});

export const { colorCodeToggle } = colorCodeSlice.actions;

const store = configureStore({
    reducer: {
        colorCode: colorCodeSlice.reducer,
    }
});

export default store;
