import React from "react";
import styles from "../CardsList/CardsList.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const CardsList = ({ cards, onAddCard, onEditCard }) => {
  return (
    <div className={styles.cardlist_container}>
      <h1 className={styles.cardlist_section_title}>Your cards</h1>
      <p className={styles.cardlist_section_subtitle}>Add, edit or delete your cards any time</p>
      <div className={styles.credit_cards_container}>
        {cards.map((card) => (
          <Card key={card.id} card={card} onEditCard={onEditCard} />
        ))}
      </div>
      <Button onClick={onAddCard} className={styles.confirm_button}>Add new card</Button>
    </div>
  );
};

export default CardsList;
