import "./App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
// import { v4 as uuidv4 } from "uuid";

function App() {

 const [contacts, setContacts] = useState([
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ])
const [filter, setFilter] = useState('')

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      const paresedContacts = JSON.parse(contacts);
      this.setState({ contacts: paresedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (data) => {
    const dataLowerCase = data.name.toLowerCase();
    const itemToFind = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === dataLowerCase
    );
    if (itemToFind) {
      alert(`${itemToFind.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handleClickDelete = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { contacts, value } = this.state;
    const filterValueNorm = this.state.filter.toLowerCase();
    const filteredContactList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValueNorm)
    );
    return (
      <div className="App">
        <h3>Phonebook</h3>
        <Form onSubmit={this.formSubmitHandler} />
        <h3>Contacts</h3>
        <p>filter via name</p>
        <Filter value={value} handler={this.handleFilter} />
        <Contacts
          contacts={filteredContactList}
          onClick={this.handleClickDelete}
        />
      </div>
    );
  }
}

propTypes = {
    contacts: PropTypes.array.isRequired,
  };

export default App;
