const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const API_KEY = 'e1337f0a1a8b482eabec531aca4881a8'

export const getNews = (category = 'general', country) => {
  const URL = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  const request = new Request(URL)
  return fetch(request).then(res => res.json())
}
