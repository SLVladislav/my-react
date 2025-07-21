import {  useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";


export const ContactList = () => {   
    const contacts = useSelector(state=> state.contacts.items);
  
    return (        
            <ul>
                {contacts.map((contact) => 
                   ( <li key={contact.id} >
                    <Contact contact={contact}  />
                    </li>)
            )}
            </ul>
        
    );
}