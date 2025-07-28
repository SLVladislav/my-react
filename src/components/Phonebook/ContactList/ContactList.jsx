import {  useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilter } from "../../../redux/filters/filtersSlice";

const getFilterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
}
export const ContactList = () => {   
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(selectFilter);
    const visibleContacts = getFilterContacts(contacts, filter);
  
    return (        
            <ul>
                {visibleContacts.map((contact) => 
                   ( <li key={contact.id} >
                    <Contact contact={contact}  />
                    </li>)
            )}
            </ul>
        
    );
}