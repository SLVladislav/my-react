import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/filtersSlice";

export const SearchBox = () => {
    const changeFilterContact = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();
    const filterContacts = () => {
        dispatch(changeFilter(changeFilterContact))
    }
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value="" onChange={filterContacts} />
        </div>
    );
}