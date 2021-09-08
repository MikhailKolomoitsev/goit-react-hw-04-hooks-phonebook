import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default function Form({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

    const nameInputId = uuidv4();
  const numberInputID = uuidv4();

    const handleNameChange = (e) => {
    setName( e.currentTarget.value);
  };
     const handleNumberChange = (e) => {
    setNumber( e.currentTarget.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: uuidv4(), name:name, number:number });
    setName("");
    setNumber("");
  };


  return (
      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            value={name}
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={numberInputID}>
          Number
          <input
            value={number}
            id={numberInputID}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleNumberChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
}

// Form.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   nameInputId = uuidv4();
//   numberInputID = uuidv4();

//   handleInputChnage = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit({ id: uuidv4(), ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({ name: "", number: "" });
//   }

//   render() {
//     return (
//       <form type="submit" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Name
//           <input
//             value={this.state.name}
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             onChange={this.handleInputChnage}
//           />
//         </label>
//         <label htmlFor={this.numberInputID}>
//           Number
//           <input
//             value={this.state.number}
//             id={this.numberInputID}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             onChange={this.handleInputChnage}
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }


