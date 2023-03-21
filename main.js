const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=09ab475ea6e205b3a6533ed35e7702f0';

const cogerPeliApi = async (query) => {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=09ab475ea6e205b3a6533ed35e7702f0&query=${query}`;
    try {
      const response = await axios.get(API_URL)
      const peliculas = response.data.results
      mostrarPeliculas(peliculas)
    } catch (error) {
      console.error(error)
    }
  };

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const movieSearch = document.getElementById('movieSearch').value
  cogerPeliApi(movieSearch)
});

const mostrarPeliculas = (peliculas) => {
    const movieResults = document.getElementById('movieResults')
    movieResults.innerHTML = ''
    peliculas.forEach((pelicula) => {
      const peliculaElement = document.createElement('div')
      peliculaElement.classList.add('pelicula')
      peliculaElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
        <h2>${pelicula.title}</h2>
        <p>${pelicula.overview}</p>
      `
      movieResults.appendChild(peliculaElement)
    })
  }