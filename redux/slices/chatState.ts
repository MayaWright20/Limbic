import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    currentID: number;
    nextStep: number;
};

const initialState: ChatState = {
    currentID: 0,
    nextStep: 0
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setNextStep: (state, action: PayloadAction<number>) => {
            state.nextStep = action.payload;
        },
        getCurrentID: (state, action: PayloadAction<number>) => {
            state.currentID = action.payload;
        },
    }
});

export const { setNextStep, getCurrentID } = chatSlice.actions;

export default chatSlice.reducer;