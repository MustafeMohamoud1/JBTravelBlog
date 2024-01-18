const postRecommendation = async (event) => {
    event.preventDefault();

    const countryDropDown = document.querySelector("#country");
    const country = countryDropDown.children("option:selected").value;
    const city = document.querySelector("#city").value.trim();
    const place = document.querySelector("#place").value.trim();
    const description = document.query('#description').value.trim();

    // if(country !== selectedCountry){
    //     alert("Please select valid country");
    // } else {
        if (country && city && place && description) {
            const response = await fetch("/api/recommendation", {
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
    //}
};

document.querySelector(".recommendation-form").addEventListener("submit", postRecommendation);