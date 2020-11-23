export async function searchGif(category) {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=ZbiyJ9p6nPacvAU3gM7rlFTXBIolRy5h`
  const response = await fetch(url)
  const { data } = await response.json()
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }
  })
  return gifs
}
