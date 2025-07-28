import { createSlice } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("filters/changeFilter");

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filter: "",
    },
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload;
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

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = state => state.filters.filter;
export default filtersSlice.reducer;
//-----------------------------------------------------------------