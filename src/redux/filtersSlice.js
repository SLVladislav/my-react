import { createAction, createSlice } from "@reduxjs/toolkit";

export const setStatusFilter = createAction("filters/changeFilter");

const slice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter(state, action) {          
            state.name = action.payload;
        },
    },
});
// const initialState = {
//     status: "all"
// };

// export default function filtersReduser(state = initialState, action) {
//     switch (action.type) {
//         case "filters/setStatusFilter":
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         default:
//             return state;
//     }
// };

export const { changeFilter } = slice.actions;

export default slice.reducer;