const API_KEY = "cd9a23d2fd294db681e28e3ff94c290b";

export const getNews = (category, country) => {
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

  https: console.log("URL: ", URL);
  return fetch(URL).then(res => res.json());
};
