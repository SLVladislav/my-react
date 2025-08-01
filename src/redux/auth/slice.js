import { createSlice } from "@reduxjs/toolkit";

 const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggerdIn: false,
        isRefreshing: false,
    }
 });

export default authSlice.reducer;