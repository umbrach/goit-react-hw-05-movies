import axios from 'axios';

const API_KEY = 'api_key=5168645d33b20991b37ed02c7beb1d13';

export async function getPopularMovie() {
    return await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`
  );
}
export async function searchMovies(searchQuery) {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${searchQuery}&language=en-US`
  );
}

export async function getMovieDetails(id) {
  // const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${API_KEY}&language=en-US`
  );
}

export async function getCastDetails(id) {
  // const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}&language=en-US`
  );
}

export async function getMovieReviews(id) {
  // const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${API_KEY}&language=en-US`
  );
}
