const API_KEY = "5ae286f3";

// Search a movie
export const searchMovies = (query, page) => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
  console.log("URL:", URL);
  return fetch(URL).then(res => res.json());
};

// Search a movie detail
export const getDetailMovie = id => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  console.log("URL:", URL);
  return fetch(URL).then(res => res.json());
};
