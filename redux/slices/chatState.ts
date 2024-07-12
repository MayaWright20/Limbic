import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    currentID: number | 'END';
};

const initialState: ChatState = {
    currentID: 0,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setCurrentID: (state, action: PayloadAction<number | 'END'>) => {
            state.currentID = action.payload;
        },
    }
});

export const { setCurrentID } = chatSlice.actions;

export default chatSlice.reducer;