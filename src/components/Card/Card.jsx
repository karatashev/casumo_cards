import React from "react";
import styles from "../Card/Card.module.css";
import Mastercard from "/mastercard-logo.svg"
import Visacard from "/visa-logo.svg"
import EditIcon from "/edit-icon.svg"

const Card = ({ card, onEditCard }) => {

  //Did not know if this was necessary but i found the color for the visa card like in the provided pictures, and put some logic to render different styles based on the fact if the user enter Master or Visa Cards.I checked that Master Cards always star with number 5.

  // This way we can check for card provider and return an Object to also have different styles for Master and Visa Cards
  const renderCardInfo = () => {
    const firstDigit = card.cardNumber.charAt(0);

    if (firstDigit === '5') {
      return {
        logo: (
          <div className={styles.logo_container}>
            <img src={Mastercard} alt="Mastercard logo" />
          </div>
        ),
        containerStyle: styles.card_container,
        cardNumberStyle: styles.card_number_white,
      };
    } else {
      return {
        logo: (
          <div className={styles.logo_container}>
            <img src={Visacard} alt="Visa logo" />
          </div>
        ),
        containerStyle: styles.visacard, 
        cardNumberStyle: styles.card_number_gray,
      };
    }
  };

  const { logo, containerStyle, cardNumberStyle } = renderCardInfo();

  return (
    <div className={containerStyle} onClick={() => onEditCard(card)}>
      {/* upper card section */}
      <div className={styles.card_upper_container}>
        {/* Card Logo */}
        {logo}
        {/* CVC and EXPIRE */}
        <div className={styles.cvc_expire_container}>
          <div className={styles.cvc_expire_info}>
            <span className={styles.title}>CVC</span>
            <span className={styles.numbers}>{card.cvc}</span>
        
          </div>
          <div className={styles.cvc_expire_info}>
            <span className={styles.title}>EXPIRES</span>
            <span className={styles.numbers}>{card.expiryDate}</span>
            </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className={styles.card_bottom_container}>
        {/* Card name and card number container */}
        <div className={styles.name_number_container}>
          <h4 className={styles.card_name}>{card.name}</h4>
          <h4 className={cardNumberStyle}>{card.cardNumber}</h4>
        </div>

        {/* Edit icon */}
        <div className={styles.icon_container}>
          <img src={EditIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
