import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemoveContact, onUpdateContact }) => (
  <ul>
    {contacts.map(({ id, name, number, completed }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        completed={completed}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}

export default ContactList;
