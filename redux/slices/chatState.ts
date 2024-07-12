import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    currentID: number;
};

const initialState: ChatState = {
    currentID: 0,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setCurrentID: (state, action: PayloadAction<number>) => {
            state.currentID = action.payload;
        },
    }
});

export const { setCurrentID } = chatSlice.actions;

export default chatSlice.reducer;