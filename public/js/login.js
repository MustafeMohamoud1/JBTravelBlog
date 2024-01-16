const loginFormHandler = async (event) => {
    event.preventDefault();

    // Uses username and password from login page
    const userName = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit',loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);