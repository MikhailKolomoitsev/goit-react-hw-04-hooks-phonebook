import React, { } from "react";
import PropTypes from "prop-types";


export default function ListContacts({contacts, onClick}) {

        return( <ul>
        {contacts.map(({id, name, number}) => (
          <li key={id}>
            {name} {number}
            <button onClick={() => onClick(id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>)
}
  
ListContacts.propTypes = {
    contacts: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
    onClick: PropTypes.func.isRequired,
  };