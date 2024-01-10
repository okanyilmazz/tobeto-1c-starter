import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { sliceItems: [] },
    reducers: {}
});
export const authReducer = authSlice.reducer;