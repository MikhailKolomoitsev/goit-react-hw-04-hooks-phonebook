import "./App.css";
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Form from "./components/Form/Form";
import ListContacts from "./components/ListContacts/ListContacts";
import Filter from "./components/Filter/Filter";
// import { v4 as uuidv4 } from "uuid";

export default function App() {

 const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem("contacts")) ??[])
const [filter, setFilter] = useState('')

  const formSubmitHandler = (data) => {
    const dataLowerCase = data.name.toLowerCase();
    const itemToFind = contacts.find(
      (contact) => contact.name.toLowerCase() === dataLowerCase
    );
    if (itemToFind) {
      alert(`${itemToFind.name} is already in contacts`);
      return
    } else {
      setContacts((prevState) => [...prevState, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
   const handleClickDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const filterValueNorm = filter.toLowerCase();
      const filteredContactList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValueNorm)
    );

return(
      <div className="App">
        <h3>Phonebook</h3>
        <Form onSubmit={formSubmitHandler} />
        <h3>Contacts</h3>
        <p>filter via name</p>
        <Filter value={filter} handler={handleFilter} />
        <ListContacts
          contacts={filteredContactList}
          onClick={handleClickDelete}
        />
      </div>
)
}
