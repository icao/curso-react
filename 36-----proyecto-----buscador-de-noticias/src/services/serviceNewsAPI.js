const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
// const qInTitle = ''
// const from = ''
// const apiKey = ''
// const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`

// fetch(request)
//   .then(response => response.json())
//   .then(news => {
//     console.log(news)
//   })
//   .catch(error => {
//     console.log(error)
//   })

const API_KEY = 'e1337f0a1a8b482eabec531aca4881a8'

export const getNews = (category = 'general', country) => {
  const URL = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  const request = new Request(URL)
  return fetch(request).then(res => res.json())
}
