const API_KEY = "20514652831b4fbd99ba5764446575ec";

export const getNews = (category = "general", country) => {
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

  return fetch(URL).then(res => res.json());
};
