import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6465eb0a9c09d77a62f7acdc.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }    
  
    });

export const addContact =  createAsyncThunk("/contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            console.log(response.data);
                
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact =  createAsyncThunk("/contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);