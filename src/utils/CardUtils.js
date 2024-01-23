const handleAddCard = (cards, setCards, selectedCard, newCardData, setShowForm) => {
    if (selectedCard) {
      // Edit card
      const updatedCards = cards.map((card) =>
        card.id === selectedCard.id ? { ...card, ...newCardData } : card
      );
      setCards(updatedCards);

    } else {
      // Add card
      setCards((prevCards) => [...prevCards, { ...newCardData, id: prevCards.length + 1 }]);
    }
    setShowForm(false);

  };
  
  export default handleAddCard;
  