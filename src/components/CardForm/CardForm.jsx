import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import validateForm from '../../utils/FormValidation';
import Button from '../Button/Button';
import ErrorIcon from '/form-error.svg'
import CheckIcon from '/form-success.svg'
import styles from "../CardForm/CardForm.module.css"

const CardForm = ({ onCancel, onSubmit, selectedCard, onDelete }) => {
  const [allInputsEmpty, setAllInputsEmpty] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  useEffect(() => {
    if (selectedCard) {
      setFormData(selectedCard);
    }
  }, [selectedCard]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      // Remove any existing spaces and limit the length to 16
      const formattedValue = value.replace(/ /g, "").substr(0, 16);

      // Insert spaces after every 4 characters
      const formattedWithSpaces = formattedValue
        .replace(/(.{4})/g, "$1 ")
        .trim();

      setFormData((prevData) => ({ ...prevData, [name]: formattedWithSpaces }));
    } else {
      // Convert value to string before calling trim to fix the error
      const trimmedValue = typeof value === "string" ? value.trim() : value;

      setFormData((prevData) => ({ ...prevData, [name]: trimmedValue }));
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // Check if all inputs are empty
    const areAllInputsNotEmpty = Object.values(formData).every(
      (value) => String(value).trim() !== ""
    );
    setAllInputsEmpty(areAllInputsNotEmpty);
  };
  

//   We  send the onSubmit as a prop to App, and with handleAddCard function it know if it is needed to add new card or edit the existing one
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = validateForm(formData);
    setFormErrors(newFormErrors);

    // Check if there are no form errors
  if (Object.values(newFormErrors).every((error) => !error)) {
    onSubmit(formData);
  }
  };

// Update allInputsEmpty when formData changes
useEffect(() => {
  const areAllInputsNotEmpty = Object.values(formData).every((value) => String(value).trim() !== '');
  setAllInputsEmpty(areAllInputsNotEmpty);
}, [formData]);

// prop onDelete is to handle the deletion of the card in App
const handleDelete = () => {
  onDelete(selectedCard)
}

  return (
    <div className={styles.form_main_container}>
      <h1 className={styles.form_title}>
        {selectedCard ? "Edit your card" : "Add your card details"}
      </h1>
      {selectedCard && <Card card={selectedCard} onEditCard={() => {}} />}

      {/* TO DO: Input can be put into separate Component, the Form is too long */}
      <form onSubmit={handleSubmit}>

        {/* CARD NAME */}
        <label>
          <div className={styles.label_name}>Name in card</div>

          <div className={styles.input_container}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={
                formErrors.name
                  ? `${styles.input} ${styles.errorInput}`
                  : formData.name && !formErrors.name && !selectedCard
                  ? `${styles.input} ${styles.successInput}`
                  : styles.input
              }
            />

            {formErrors.name && <img src={ErrorIcon} />}
            {formData.name && !formErrors.name && !selectedCard && <img src={CheckIcon} />}
          </div>

          <div className={styles.error}>{formErrors.name}</div>
        </label>
        <br />

        {/* CARD NUMBER */}
        <label>
          <div className={styles.label_name}>Card number</div>

        <div className={styles.input_container}>
        <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="19"
            placeholder="0000 0000 0000 0000"
            className={
              formErrors.cardNumber
                ? `${styles.input} ${styles.errorInput}`
                : formData.cardNumber && !formErrors.cardNumber && !selectedCard
                ? `${styles.input} ${styles.successInput}`
                : styles.input
            }
          />
            {formErrors.cardNumber && <img src={ErrorIcon} />}
            {formData.cardNumber && !formErrors.cardNumber && !selectedCard && <img src={CheckIcon} />}
        </div>
        
          <div className={styles.error}>{formErrors.cardNumber}</div>
        </label>
        <br />

        {/* EXPIRY DATE */}
        <label>
          <div className={styles.label_name}>Expiry date</div>

          <div className={styles.input_container}>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="00/00"
            className={
              formErrors.expiryDate
                ? `${styles.input} ${styles.errorInput}`
                : formData.expiryDate && !formErrors.expiryDate && !selectedCard
                ? `${styles.input} ${styles.successInput}`
                : styles.input
            }
          />
           {formErrors.expiryDate && <img src={ErrorIcon} />}
            {formData.expiryDate && !formErrors.expiryDate && !selectedCard && <img src={CheckIcon} />}
          </div>
  
          <div className={styles.error}>{formErrors.expiryDate}</div>
        </label>
        <br />

        {/* CVC */}
        <label>
          <div className={styles.label_name}>CVC (Security Code)</div>

          <div className={styles.input_container}>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            maxLength="3"
            placeholder="000"
            className={
              formErrors.cvc
                ? `${styles.input} ${styles.errorInput}`
                : formData.cvc && !formErrors.cvc && !selectedCard
                ? `${styles.input} ${styles.successInput}`
                : styles.input
            }
          />
            {formErrors.cvc && <img src={ErrorIcon} />}
            {formData.cvc && !formErrors.cvc && !selectedCard && <img src={CheckIcon} />}
          </div>
         
          <div className={styles.error}>{formErrors.cvc}</div>
        </label>
        <br />
        <Button className={styles.confirm_button} type="submit" disabled={!allInputsEmpty}>
          Confirm
        </Button>

        {/* For actions like DELETE card i think better UX is after click to show some Modal and if the user is sure that he wants to delete the selected card, but the provided design was not like this so i will leave this feature like it is */}
        {selectedCard && <Button onClick={handleDelete} className={styles.delete_button} type="submit" disabled={""}>
          Delete card
        </Button>}
      </form>
    </div>
  );
};

export default CardForm;