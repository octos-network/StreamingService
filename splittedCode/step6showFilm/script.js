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

    const film = { titel, genre, mainActor, length, year };
    showFilms(film);

     // clears form
     this.reset();
}

function showFilms(film) {

    // fetches reference to the created div -> in HTML
    const filmList = document.getElementById('filmList');
 
    const filmItem = document.createElement('div');
        filmItem.classList.add('film');
        filmItem.innerHTML = `
            <h3>${film.titel}</h3>
            <p>Genre: ${film.genre}</p>
            <p>Main actor: ${film.mainActor}</p>
            <p>Length: ${film.length} minutes</p>
            <p>Publication year: ${film.year}</p>
        `;
        filmList.appendChild(filmItem);
}

document.getElementById('filmForm').addEventListener('submit', addFilm);