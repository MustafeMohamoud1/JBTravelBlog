const updateBtns = document.querySelectorAll("#edit_Btn");

for (let i = 0; i < updateBtns.length; i++) {

  updateBtns[i].addEventListener("click", async function(event) {

    console.log(event.target);

    let id = parseInt(event.target.dataset.id);

    console.log(id);

    const place = form.place.value;
    const description = form.description.value;

    const response = await fetch(`/api/recommendation/recomJson/:id${id}`, {
      method: 'PUT',  
      body:JSON.stringify({ place,description}),
      headers: { 
        'Content-Type': 'application/json'
      },
    
    });
    if(response.ok) {
      document.location.replace("/api/recommendation/recomJson/Italy"); 
    } else {
      alert("Failed to update recommendation");
    }

  });

}


