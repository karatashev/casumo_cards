export const initialCards = [
    { id: 1, name: 'Harry Potter', cardNumber: '5111 2222 3333 4444', expiryDate: '12/28', cvc: '123' },
    { id: 2, name: 'Vasil Karatashev', cardNumber: '1111 2222 3333 4444', expiryDate: '08/25', cvc: '222' },
  ];
  
  export const getStoredCards = () => {
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  };
  
  export const storeCards = (cards) => {
    localStorage.setItem('cards', JSON.stringify(cards));
  };