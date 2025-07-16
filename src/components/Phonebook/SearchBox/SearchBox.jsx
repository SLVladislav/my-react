import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../../redux/filtersSlice";

export const SearchBox = () => {
    const changeFilterContact = useSelector((state) => state.filters.name);
    const dispatch = useDispatch((changeFilterContact)=> dispatch(setStatusFilter(changeFilterContact)))
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value={changeFilterContact} onChange={(evt) => changeFilterContact(evt.target.value)} />
        </div>
    );
}