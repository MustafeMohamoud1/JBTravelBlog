const login = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (name && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(name +" could not log in");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", login);