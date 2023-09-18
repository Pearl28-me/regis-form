const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const telno = document.getElementById('telno');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const telnoValue = telno.value.trim();
  const emailValue = email.value.trim();

  if (firstnameValue === '') {
    setError(firstname, 'Firstname is required');
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === '') {
    setError(lastname, 'Lastname is required');
  } else {
    setSuccess(lastname);
  }

  if (telnoValue === '') {
    setError(telno, 'Telephone number is required');
  } else if (telnoValue.length === 10) {
    setSuccess(telno);
  } else {
    setError(telno, 'Telephone number should be 10 characters');
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!emailValue.includes('@')) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }
};
