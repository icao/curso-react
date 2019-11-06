const API_KEY = "5ae286f3";

export const searchMovies = query => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
  return fetch(URL)
    .then(res => res.json())
    // .then(({ Search }) => Search);
};
