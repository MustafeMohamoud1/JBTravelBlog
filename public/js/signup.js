const signup = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document.querySelector("#confirm-password").value.trim();

    if(password !== confirmPassword){
        alert("password does not match");
    } else {
        if (username && password) {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { "Content-Type": "application/json" },
            });
            
            if (response.ok) {
                document.location.replace("/");
            } else {
                alert("Error creating user");
            }
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signup);