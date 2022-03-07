const API_KEY = "219f1e4c1a08f5f7d5736b239155bfa7";

export const getNews = (category = "general", country, date) => {
  const URL = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=${country}&categories=${category}&date=${date}`;

  return fetch(URL).then((res) => res.json());
};
