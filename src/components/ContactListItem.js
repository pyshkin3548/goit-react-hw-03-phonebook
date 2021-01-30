import React from 'react';

const ContactListItem = ({ name, number, completed, onRemove, onUpdate }) => (
  <li>
    <p>{name}</p>
    <p>{number}</p>
    <section>
      <button type="button" onClick={onRemove}>
        Delete
      </button>
    </section>
  </li>
);

export default ContactListItem;
