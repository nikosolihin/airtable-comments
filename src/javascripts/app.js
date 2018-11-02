import axios from 'axios';

/**
 * Variables
 */
const apiKey = 'keyuov7wHtMTqe76v';
const endpoint = 'https://api.airtable.com/v0/appmUYZNIjOtolIgX/Comment';
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};
const successMessage = 'Thank you for submitting!';
const failedMessage = 'Error, please try again.';

/**
 * Selectors
 */
const form = document.querySelector('.form');
const alert = document.querySelector('.alert');
const spinner = document.querySelector('.spinner');
const overlay = document.querySelector('.overlay');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const comment = document.querySelector('.comment');

const clearForm = () => {
  name.value = '';
  email.value = '';
  comment.value = '';
};

const toggleSpinner = () => spinner.classList.toggle('spinner--open');

const toggleOverlay = () => overlay.classList.toggle('overlay--open');

const toggleAlert = type => {
  alert.querySelector('span').innerText = type === 'success' ? successMessage : failedMessage;
  alert.classList.toggle(`alert--${type}`);
};

const postToAirtable = () => {
  const body = {
    fields: {
      Name: name.value,
      Email: email.value,
      Comment: comment.value,
    },
  };
  axios
    .post(endpoint, body, config)
    .then(_ => toggleAlert('success'))
    .catch(_ => toggleAlert('failed'))
    .then(_ => {
      toggleSpinner();
      clearForm();
      setTimeout(toggleOverlay, 1500);
    });
};

const handleSubmit = e => {
  e.preventDefault();
  toggleOverlay();
  toggleSpinner();
  postToAirtable();
};

form.addEventListener('submit', handleSubmit);
