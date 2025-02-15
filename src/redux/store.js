import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSLice"; // Ensure correct path

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
