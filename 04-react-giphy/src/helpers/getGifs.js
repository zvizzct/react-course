import { fetch } from 'whatwg-fetch';
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=d1Up34992UkfoxRA4qv35qJSG7pHGGox&q=${category}&limit=24`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  return gifs;
};
