//random
const contactFormButton = document.querySelector('.contact-form__button');
const buttonLabels = [
    'SEND',
    'SEND ME',
    'CLICK TO SEND',
    'SUBMIT'
];
const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
contactFormButton.value = getRandomEl(buttonLabels);
