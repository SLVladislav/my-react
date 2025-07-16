import { FcBusinessman, FcCellPhone  } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteContacts} from "../../../redux/contactsSlice";


export const Contact = ({ contact }) => {    
   const dispatch = useDispatch();
  const handleDeleteContacts = () => {
    dispatch(deleteContacts(contact.id))
  };
    return (    
        <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center gap-4">
          <FcBusinessman className="text-2xl" />
          <div>
            <p className="text-lg font-semibold">{contact.name}</p>
            <div className="flex items-center gap-2 text-gray-600">
              <FcCellPhone className="text-xl" />
              <span>{contact.number}</span>
            </div>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition" onClick={handleDeleteContacts} >
          Delete
        </button>
      </div>
        
    );
}