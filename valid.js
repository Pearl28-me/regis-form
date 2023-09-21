
const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const telno = document.getElementById('telephone');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    let query_string = new URLSearchParams(new FormData(e.target))
   if(validateInputs())  window.location.href =`anotherpage.html?${query_string}`
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); // Fix typo
    errorDisplay.innerText = message; // Fix case
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); // Fix typo
    errorDisplay.innerText = ''; // Fix case
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const telnoValue = telno.value.trim();
    const emailValue = email.value.trim();

    let res = true;

    if (!firstnameValue) {
        setError(firstname, 'First name is required');
        res = false
    } else {
        setSuccess(firstname);
    }

    if (!lastnameValue) {
        setError(lastname, 'Last name is required');
        res = false
    } else {
        setSuccess(lastname);
    }

    if (!telnoValue) {
        setError(telno, 'Telephone number is required');
        res = false
    } else if (telnoValue.length === 10) {
        setSuccess(telno);
    } else {
        setError(telno, 'Telephone number should be 10 characters');
        res = false
    }

if (!emailValue) {
        setError(email, 'Email is required');
        res = false
    }
     else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        res = false
    } else {
        setSuccess(email);
    }


            return res ;
};





const isValidEmail = (email) => {

    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
