const API_KEY = "5ae286f3";

export const searchMovies = (query, page) => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
  console.log("URL:", URL);
  return fetch(URL).then(res => res.json());
};


// TODO: con el total de resultados hacer un contador,
// en base al lenght del los Response, ir sumandolos. 

// Si el total acumulado === total result,
//   entonces, cancelar el boton de siguiente.
