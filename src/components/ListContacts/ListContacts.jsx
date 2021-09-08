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
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
    onClick: PropTypes.func.isRequired,
  };

//  class oldContacts extends Component {
//   static defaultProps = {
//     contacts: [],
//   };

//   static propTypes = {
//     contacts: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number,
//       PropTypes.array,
//     ]),
//     onClick: PropTypes.func.isRequired,
//   };

//   state = { contacts: this.props.contacts };

//   handleClick = (id) => {
//     this.props.onClick(id);
//   };

//   render() {
//     const data = this.props.contacts;
//     return (
//       <ul>
//         {data.map((contact) => (
//           <li key={contact.id}>
//             {contact.name} {contact.number}
//             <button onClick={() => this.handleClick(contact.id)} type="button">
//               delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

