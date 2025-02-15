import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    location: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
