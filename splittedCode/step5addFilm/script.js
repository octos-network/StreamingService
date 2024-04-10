// function for adding a film
function addFilm(event) {

    // prevents the page from reloading after submitting the form
    event.preventDefault(); 

    // read information from the text fields
    const titel = document.getElementById('titel').value;
    const genre = document.getElementById('genre').value;
    const mainActor = document.getElementById('mainActor').value;
    const length = parseInt(document.getElementById('length').value);
    const year = parseInt(document.getElementById('year').value);

    console.log("film added");
    console.log("titel: " + titel);
    console.log("genre: " + genre);
    console.log("mainActor: " + mainActor);
    console.log("length: " + length);
    console.log("year: " + year);

     // clears form
     this.reset();
}

document.getElementById('filmForm').addEventListener('submit', addFilm);