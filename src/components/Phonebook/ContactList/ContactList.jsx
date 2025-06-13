import { Contact } from "../Contact/Contact"

export const ContactList = ({ filteredList, handlerDeleteContact }) => {
   
    
    return (        
            <ul>
                {filteredList.map((contactInfo) => 
                   ( <li key={contactInfo.id} >
                    <Contact contactInfo={contactInfo} handlerDeleteContact={handlerDeleteContact} />
                    </li>)
            )}
            </ul>
        
    );
}