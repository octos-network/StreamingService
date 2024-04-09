// function for adding a film
function addFilm(event) {

    // prevents the page from reloading after submitting the form
    event.preventDefault(); 

    console.log("film added")
}

document.getElementById('filmForm').addEventListener('submit', addFilm);