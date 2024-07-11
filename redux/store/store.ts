import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userState";
import chatReducer from "../slices/chatState";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;