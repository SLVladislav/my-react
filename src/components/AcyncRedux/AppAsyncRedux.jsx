// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { fetchTasks } from "./redux/operation";

// export const AppAsyncRedux = () => {
//     const dispatch = useDispatch();
//     // Отримуємо частини стану
//     const { items, isLoading, error } = useSelector((state) => state.tasks);

//     useEffect(() => {
//         dispatch(fetchTasks())
//     }, [dispatch]);

//     return (
//         <div>
//             {isLoading && <p>Loading tasks....</p>}
//             {error && <p>{error}</p>}
//             <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//         </div>
//     )
// };