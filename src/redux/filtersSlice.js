import { createAction, createSlice } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("filters/setStatusFilter");

const slice = createSlice({
    name: "filters",
    initialState: {
        name: "all",
    },
    reducers: {
        setStatusFilter(state, action) {          
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

export const { setStatusFilter } = slice.actions;

export default slice.reducer;