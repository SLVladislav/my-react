import { useState } from "react";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox"; 

const phoneBookList = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

export const AppPhoneBook = () => {
    const [listNames, setListNames] = useState(phoneBookList);
    const [filterLists, setFilterLists] = useState("");

    const handleFilterLst = listNames.filter((listName) => listName.name.toLowerCase().includes(filter.toLowerCasw()));




    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Phonebook</h1>
            <SearchBox  value={filterLists} onFiter={setFilterLists} />
            {/* <ContactForm/> */}
            <ContactList listNames={listNames} setListNames={setListNames} handleFilterLst={handleFilterLst} />
        </div>
    );
}