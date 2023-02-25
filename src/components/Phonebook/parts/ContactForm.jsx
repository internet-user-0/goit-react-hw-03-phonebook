import React, { Component } from 'react';
import css from './/ContactForm.module.css';

class ContactForm extends Component {
   state = {
      name: '',
      number: '',
   };

   handelMessageChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
   };

   handelSubmit = e => {
      e.preventDefault();

      this.props.onAddContact(this.state.name, this.state.number);

      this.reset();
   };

   reset = () => {
      this.setState({
         name: '',
         number: '',
      });
   };

   render() {
      return (
         <div>
            <form
               className={css.form__addContacts}
               onSubmit={this.handelSubmit}
            >
               <label className={css.form__label}>
                  <p className={css.form__text}>Name</p>
                  <input
                     className={css.form__input}
                     type="text"
                     value={this.state.name}
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                     onChange={this.handelMessageChange}
                  />
               </label>
               <label className={css.form__label}>
                  <p className={css.form__text}>Number</p>
                  <input
                     className={css.form__input}
                     type="tel"
                     value={this.state.number}
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                     onChange={this.handelMessageChange}
                  />
               </label>
               <br />
               <button className={css.form__btn} type="submit">Add contact</button>
            </form>
         </div>
      );
   }
}

export default ContactForm;
