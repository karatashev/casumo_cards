import { useEffect, useState } from 'react'
import CardForm from './components/CardForm/CardForm';
import CardsList from './components/CardsList/CardsList';
import handleAddCard from './utils/CardUtils';
import { initialCards, getStoredCards, storeCards } from './cardsData';
import CloseIcon from '/close_icon.png?url'
import "./App.css"

function App() {
  //get the stored cards from cardsData.js
  const [cards, setCards] = useState(getStoredCards());
  const [showForm, setShowForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


   // Update Local Storage whenever there is a change in cards
   useEffect(() => {
    storeCards(cards);
  }, [cards]);

  // Now handleAddCard is moved in utils folder to have a cleaner App.jsx, CardForm directly uses handAddCard function in the onSubmit prop
  const onSubmitHandler = (newCardData) => {
    handleAddCard(cards, setCards, selectedCard, newCardData, setShowForm);
  };

  const onDeleteHandler = (deletedCard) => {
    // To filter the deleted card out of the cards array
    const updatedCards = cards.filter((card) => card.id !== deletedCard.id);
    setCards(updatedCards);
    setShowForm(false);
    setSelectedCard(null);
  };

  return (
    <div className="main-container">
      <CardsList
        cards={cards}
        onAddCard={() => {
          setShowForm(true);
          setSelectedCard(null);
        }}
        onEditCard={(card) => {
          setSelectedCard(card);
          setShowForm(true);
        }}
      />

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <img onClick={() => setShowForm(false)} className='close-icon' src={CloseIcon} alt="Close form" />
            <CardForm
              onCancel={() => {
                setShowForm(false);
                setSelectedCard(null);
              }}
              onSubmit={onSubmitHandler}
              onDelete={onDeleteHandler}
              selectedCard={selectedCard}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App
