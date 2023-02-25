import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './parts/ContactForm';
import ContactList from './parts/ContactList';
import Filter from './parts/Filter';
class Phonebook extends Component {
   state = {
      contacts: [],
      filter: '',
   };

   addContact = (name, number) => {
      const contact = {
         id: nanoid(),
         name,
         number,
      };
      const alreadyHas = this.state.contacts.map(contact => {
         return contact.name;
      });

      if (alreadyHas.includes(contact.name)) {
         alert(contact.name + ' is already in contacts');
         return;
      }

      this.setState(({ contacts }) => ({
         contacts: [contact, ...contacts],
      }));
   };

   changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
   };

   onDelete = contactId => {
      this.setState(({ contacts }) => ({
         contacts: contacts.filter(({ id }) => id !== contactId),
      }));
   };

   render() {
      const { contacts, filter } = this.state;

      const normalizeFilter = filter.toLowerCase();

      const visibleContacts = contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );

      return (
         <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={this.addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter}></Filter>
            <ContactList
               contactsAray={visibleContacts}
               onDelete={this.onDelete}
            />
         </div>
      );
   }
}

export default Phonebook;
