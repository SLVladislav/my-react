
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox"; 
import { ContactForm } from "../ContacktForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";

// const phoneBookList = [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ]

export const AppPhoneBook = () => {
    //------------------------------------------------------------------------
    // const [contactList, setContactList] = useState(phoneBookList);
    // const [filter, setFilter] = useState("");


    // const filteredList = contactList.filter((listName) => listName.name.toLowerCase().includes(filter.toLowerCase()));

    // const handlerDeleteContact = (id) => {
    //     setContactList((prevState) => {
    //         const newListName = prevState.filter((contact) => {
    //             return contact.id !== id;
    //         })
    //         return newListName;
    //     })
    // };

    // const addContact = (newContact) => {             
    //     setContactList((prevContact) => {
    //         return [...prevContact, newContact];
    //     })
    // }
   //------------------------------------------------------------------------------------
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const error = useSelector((state) => state.contacts.error);

    useEffect(() => {
       dispatch(fetchContacts()) 
    },[dispatch])
   
    

    return (
        // <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        //     <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Phonebook</h1>
        //     <ContactForm onAddContact={addContact } />
        //     <SearchBox  value={filter} onFilter={setFilter} />
        //     {/* <ContactForm/> */}
        //     <ContactList contactList={contactList} setContactList={setContactList} filteredList={filteredList} handlerDeleteContact={handlerDeleteContact} />
        // </div>
        <div>
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && !error && <b>Recuest in progress....</b>} 
            <ContactList />
        </div>
    );
}