import { Contact } from "../Contact/Contact"

export const ContactList = ({ listNames }) => {
    console.log(listNames);
    
    return (        
            <ul>
                {listNames.map((listName) => 
                   ( <li key={listName.id}>
                        <Contact listName={listName} />
                    </li>)
            )};
            </ul>
        
    );
}