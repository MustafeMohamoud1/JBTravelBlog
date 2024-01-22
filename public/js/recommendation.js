    const postRecommendation = async (event) => {
    event.preventDefault();


    const country = document.querySelector("#country").value;
    const city = document.querySelector("#city").value.trim();
    const place = document.querySelector("#place").value.trim();
    const description = document.querySelector('#description').value.trim();

    if (country && city && place && description) {
        const response = await fetch('recommendation', {
            method: "POST",
            body: JSON.stringify({ country, city, place, description  }),
            headers: { "Content-Type": "application/json" },
        });
        
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Error creating recommendations");
        }
    }
};

document.querySelector(".recommendation-form").addEventListener("submit", postRecommendation);