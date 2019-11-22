const API_KEY = "5ae286f3";

export const searchMovies = (query, page) => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
  console.log("URL:", URL);
  return fetch(URL).then(res => res.json());
};
