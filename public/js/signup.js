const signup = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document.querySelector("#confirm-password").value.trim();

    if(password !== confirmPassword){
        alert("password does not match");
    } else {
        if (name && password) {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({ name, password }),
                headers: { "Content-Type": "application/json" },
            });
            
            if (response.ok) {
                document.location.replace("/");
            } else {
                alert("Error, please check your password");
            }
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signup);