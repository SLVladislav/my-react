// import { createAction, createSlice } from "@reduxjs/toolkit";

// // export const addContactsItems = createAction("contacts/addContactsItems");
// // export const deleteContactsItems = createAction("contacts/deleteContactsItems");
// // export const toggleCompleted = createAction("tasks/toggleCompleted");

// // Початковий стан
// const initialState = {
//      items: [
//                 { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//                 { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//                 { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//                 { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//             ]
// };

// const slice = createSlice({
//     name: "contacts",
//     initialState,
//         reducers: {
//             addContact: (state, action) => {
//                 return {
//                     ...state,
//                     items: [...state.items, action.payload],
//                 };
//                 // state.items.push(action.payload);
//             },
//             deleteContact: (state, action) => {
//                 return {
//                     ...state,
//                     items: state.items.filter((contact) => contact.id !== action.payload),
//                 };
//                 // state.items = state.items.filter(item => item.id !== action.payload);
//             },
       
//         },
               
    
    
// });
//     // Об'єкт case-редюсерів
//     // reducers: {
//     //     addTask: (state, action) => {
//     //         return {
//     //             ...state,
//     //             items: [...state.contacts.items, action.payload],
//     //         };
//     //         // state.items.push(action.payload);
//     //     },
//     //     deleteTask: (state, action) => {
//     //         return {
//     //             ...state,
//     //             items: state.contacts.items.filter((contact) => contact.id !== action.payload),
//     //         };
//     //         // state.items = state.items.filter(item => item.id !== action.payload);
//     //     },
//         // toggleCompleted: (state, action) => {
//         //     return {
//         //         ...state,
//         //         items: state.items.map((task) => {
//         //             if (task.id !== action.payload) {
//         //                 return task;
//         //             }
//         //             return {
//         //                 ...task,
//         //                 completed: !task.completed,
//         //             }
//         //         })
                    
//         //     };
//             // for (const task of state.items) {
//             //     if (task.id === action.payload) {
//             //         task.completed = !task.completed;
//             //         break;
//             //     }
//             // };
// //         },
    
// // });

// // const initialState = {
// //     tasks: {
// //         items: [
// //             { id: 0, text: "Learn HTML and CSS", completed: true },
// //             { id: 1, text: "Get good at JavaScript", completed: true },
// //             { id: 2, text: "Master React", completed: false },
// //             { id: 3, text: "Discover Redux", completed: false },
// //             { id: 4, text: "Build amazing apps", completed: false },
// //         ]
// //     }
// // };

// // Експортуємо редюмсер слайс
// // export default function tasksReducer(state = initialState, action) {
// //     switch (action.type) {
// //         case "tasks/addTask": {
// //             return {
// //                 ...state,
// //                 items: [...state.items, action.playload],
// //             };
// //         }
// //         case "tasks/deleteTask":
// //             return {
// //                 ...state,
// //                 items: state.items.filter((task)=> task.id !== action.payload),
// //             }
// //             case "tasks/toggleCompleted":
// //                 return {
// //                     ...state,
// //                     items: state.items.map((task) => {
// //                         if (task.id !== action.payload) {
// //                             return task;
// //                         }
// //                         return {
// //                             ...task,
// //                             completed: !task.completed,
// //                         }
// //                     })
                        
// //             };
// //             default:
// //                 return state;
// //     }
// // };

// export const { addContact, deleteContact } = slice.actions;

// export default slice.reducer;
//------------------------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    //Додаємо обробку зовнішніх екшенів
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected,handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)
    },
    //-----------------------------------------------------
    // reducers: {
    //     // Виконається в момент старту HTTP-запиту
    //     fetchInProgress(state) {
    //         state.isLoading = true;
    //     },
    //     // Виконається якщо HTTP-запит завершився успішно
    //     fetchSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     // Виконається якщо HTTP-запит завершився з помилкою
    //     fetchError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // },
    //----------------------------------------------------------
});

// export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;

export default contactsSlice.reducer;