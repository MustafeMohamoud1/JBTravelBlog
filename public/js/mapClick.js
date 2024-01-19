const click = (event) => {
    console.log(event.srcElement.id);
}
const clickedCountry = window.addEventListener("click", click);