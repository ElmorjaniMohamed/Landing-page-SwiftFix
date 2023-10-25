// Validation 
// Name

const form = document.querySelector('#forms-info');
const username = document.querySelector('#your-name');
const email = document.querySelector('#your-email');
const subject = document.querySelector('#your-subject');
const message = document.querySelector('#your-message');

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

// Error
const setError = (element, message) => {

    const inputSection = element.parentElement;
    const errorDisplay = inputSection.querySelector('.error');

    errorDisplay.innerText = message;
    inputSection.classList.add('error');
    inputSection.classList.remove('success');
};

// Success
const setSuccess = element => {

    const inputSection = element.parentElement;
    const errorDisplay = inputSection.querySelector('.error');
	console.log(errorDisplay)

    errorDisplay.innerText = '';
    inputSection.classList.add('success');
    inputSection.classList.remove('error');
};

// Text Verification
const textVerify = (text) => {
	const regex = /^[a-zA-Z ]{2,}$/;
	return regex.test(text);
};

// Email Verification
const emailVerify = (email) => {
	const regex = /^[a-z0-9]+@[a-z]{3,}\.[a-z\.]{3,5}$/;
	return regex.test(email);
}; 

const validateInputs = () =>{
	const nameValue = username.value.trim();
	const emailValue = email.value.trim();
	const subjectValue = subject.value.trim();
	const messageValue = message.value.trim();

	// Username

	if(nameValue === '') {
		setError(username, 'Username is required');
	}
	// else if (!textVerify(username)){
	// 	setError(username, 'Provide a valid your username')
	// }
	else {
		setSuccess(username);
	}

	// Email

	if(emailValue === ''){
		setError(email, 'Email is required');
	}
	else if (!emailVerify(emailValue)) {
		setError(email, 'Provide a valid email address');
	}
	else {
		setSuccess(email);
	}

	// Subject

	if(subjectValue === '') {
		setError(subject, 'Subject is required');
	}
	else {
		setSuccess(subject);
	}

	// Message

	if(messageValue === '') {
		setError(message, 'Subject is required');
	}
	else {
		setSuccess(message);
	}
};