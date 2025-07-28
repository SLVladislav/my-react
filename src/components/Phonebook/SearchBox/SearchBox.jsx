import { useDispatch, useSelector } from "react-redux";
// import { changeFilter } from "redux/filtersSlice";
import { changeFilter, selectFilter } from "../../../redux/filters/filtersSlice";



export const SearchBox = () => {
    const filterContact = useSelector(selectFilter)
    const dispatch = useDispatch();
    const handleFilters = (e) => {
        console.log(e.target.value);
        
        dispatch(changeFilter(e.target.value));
    };


  
    
    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-2xl">
            <p className="text-lg font-medium text-gray-700 mb-2">Find contacts by name</p>
            <input
                type="text"
                name="name"
                placeholder="Search..."
                value={filterContact}
                onChange={handleFilters}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
        </div>
    );
}