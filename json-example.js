const movieData = `{
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
}`;

const movie = JSON.parse(movieData);
console.log('Movie Title:', movie.title);
console.log('Actors:', movie.actors.join(', '));

const movieString = JSON.stringify(movie);
console.log('Stringified JSON:', movieString);
