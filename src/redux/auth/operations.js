import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

axios.defaults.headers.common['Authorization'] = `Berear`;

export const authRegister = createAsyncThunk("auth/register",
    async (_, thunkAPI){
        try {
            consr response = await axios.post("/users/signup")
        } catch (error) {
            
        }
    }
)
