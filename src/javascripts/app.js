import axios from 'axios';

const form = document.querySelector('.form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const comment = document.querySelector('.comment');
const success = document.querySelector('.form__success');
const button = document.querySelector('.form__button');
const fieldset = document.querySelector('.form fieldset');

const clearForm = () => {
  name.value = '';
  email.value = '';
  comment.value = '';
  success.classList.add('form__success--show');
};

const handleSubmit = e => {
  e.preventDefault();
  const body = {
    fields: {
      Name: name.value,
      Email: email.value,
      Comment: comment.value,
    },
  };

  const config = {
    headers: {
      Authorization: 'Bearer keyuov7wHtMTqe76v',
    },
  };

  button.querySelector('span').innerText = 'Submitting...';
  button.classList.add('form__button--loading');
  fieldset.setAttribute('disabled', true);

  axios.post('https://api.airtable.com/v0/appmUYZNIjOtolIgX/Comment', body, config).then(res => {
    clearForm();
    button.querySelector('span').innerText = 'Submit';
    button.classList.remove('form__button--loading');
    fieldset.removeAttribute('disabled');
  });
};

form.addEventListener('submit', handleSubmit);
