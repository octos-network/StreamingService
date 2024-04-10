// "database" for movies
let films = [];

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
    const trailerLink = document.getElementById('trailerLink').value;

    // create film object and add to the "database" 
    const film = { titel, genre, mainActor, length, year, trailerLink };
    films.push(film);
    showFilms();

    // clears form
    this.reset();
}

// function for displaying the movies and event listeners for the Watchlist buttons
function showFilms() {

    // fetches reference to the created div -> in HTML
    const filmList = document.getElementById('filmList');
    
    // empties div
    filmList.innerHTML = '';
    
    // goes through each object in the "database"
    films.forEach((film, index) => {
        const filmItem = document.createElement('div');
        filmItem.classList.add('film');
        filmItem.innerHTML = `
            <h3>${film.titel}</h3>
            <p>Genre: ${film.genre}</p>
            <p>Main actor: ${film.mainActor}</p>
            <p>Length: ${film.length} minutes</p>
            <p>Publication year: ${film.year}</p>
            <button onclick="watchFilm(event, ${index})">Watch Film</button>
            <button onclick="filmToWatchlistEvent(event, ${index})">Add to Watchlist</button>
        `;
        filmList.appendChild(filmItem);
    });
}

// "database" for Watchlist
let watchlist = [];

// function for adding a film to the Watchlist
function addFilmToWatchlist(index) {
    const film = films[index];
    watchlist.push(film);
    showWatchlist();
}

// function for displaying the watchlist
function showWatchlist() {
    const watchlistFilms = document.getElementById('watchlist');
    watchlistFilms.innerHTML = '';
    watchlist.forEach((film, index) => {
        const watchlistItem = document.createElement('div');
        watchlistItem.classList.add('film');
        watchlistItem.innerHTML = `
            <h3>${film.titel}</h3>
            <p>Genre: ${film.genre}</p>
            <p>Main actor: ${film.mainActor}</p>
            <p>Length: ${film.length} minutes</p>
            <p>Publication year: ${film.year}</p>
            <button onclick="watchFilm(event, ${index})">Watch Film</button>
            <button onclick="removeFilmFromWatchlist(${index})">Remove from Watchlist</button>
        `;
        watchlistFilms.appendChild(watchlistItem);
    });
}

// event listener for adding a film to the watchlist
function filmToWatchlistEvent(event, index) {
    event.stopPropagation();
    addFilmToWatchlist(index);
}

// Funktion zum Hinzufügen eines Films zur Watchlist
function watchFilm(event, index) {
    event.stopPropagation(); 
    const film = films[index];
    const trailerLink = film.trailerLink;
    window.open(trailerLink, '_blank');
}

// function to remove a film from the Watchlist
function removeFilmFromWatchlist(index) {
    watchlist.splice(index, 1);
    showWatchlist();
}

// va
function validatePositiveInteger(event) {
    const input = event.target.value;
    if (!(/^\d+$/.test(input))) {
        event.target.value = '';
    }
}

// event listeners for the form
document.getElementById('filmForm').addEventListener('submit', addFilm);
document.getElementById('length').addEventListener('input', validatePositiveInteger);
document.getElementById('year').addEventListener('input', validatePositiveInteger);