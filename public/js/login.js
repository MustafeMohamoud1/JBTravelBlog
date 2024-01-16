const login = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (name && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(name +" could not log in");
        }
    }
};

const signUp = async (event) => {
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

document.querySelector(".login-form").addEventListener("submit", login);

document.querySelector('.signup-form').addEventListener('submit', signUp);