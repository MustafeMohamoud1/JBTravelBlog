const mapNavigation = async (event) => {

    const click = document.getElementById("europe-map");
    click.addEventListener('click', function(event){
        if("france-map"){
            document.location.replace("/france");
        } else if ("spain-map"){
            document.location.replace("/spain");
        } else if ("italy-map"){
            document.location.replace("/italy");
        } else {
            alert("Bear with us, the world is under construction. In the meantime, why not go to France, Italy or Spain?");
        }
    })
};

