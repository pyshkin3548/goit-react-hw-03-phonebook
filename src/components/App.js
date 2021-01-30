import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactEditor from './ContactEditor';
import { v4 as uuid_v4 } from 'uuid';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [

      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    
    ],
    filter: '',
  };

  componentDidMount() {
    console.log("Contacts componentDidMount");
    const persistedContacts = localStorage.getItem('contacts')

    if (persistedContacts) {
      // console.log(persistedTasks)

      this.setState({
        contacts: JSON.parse(persistedContacts)
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("Contacts componentDidUpdate");

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuid_v4(),
      name,
      number,
    };

    const searchSameName = this.state.contacts
      .map(contact => contact.name)
      .includes(name);

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
    console.log(filter);
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;

    const visableContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phone Book</h1>
        <ContactEditor onAddContact={this.addContact} />
        {visableContacts.length > 1 && (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </>
        )}
        {visableContacts.length > 0 && (
          <ContactList
            contacts={visableContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}
