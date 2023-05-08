import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, Subtitle } from 'components/App/App.styled';

import { Form } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLocaleLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (findName) {
      alert(`${name} is already in the contacts`);
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({ contacts: [...contacts, newContact] }));
  };

  changeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
