const validateForm = (formData) => {
    const newFormErrors = {};
  
    // Validation for Name
    if (!formData.name.trim()) {
      newFormErrors.name = 'Please fill in your name';
    }
  
    // Validation for Card Number
    if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formData.cardNumber)) {
      newFormErrors.cardNumber = 'Please enter a valid credit card number';
    }
  
    // Validation for Expiry Date
    const [month, year] = formData.expiryDate.split('/');
    const currentYear = new Date().getFullYear();
    const currentYearLastTwoDigits = currentYear % 100;
    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate) || +month > 12 || +year < currentYearLastTwoDigits) {
      newFormErrors.expiryDate = 'Please enter a valid expiry date';
    }
  
    // Validation for CVC
    if (!/^\d{3}$/.test(formData.cvc)) {
      newFormErrors.cvc = 'Please enter a valid security code';
    }
  
    return newFormErrors;
  };
  
  export default validateForm;
  