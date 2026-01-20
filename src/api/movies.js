import axios from "axios";

export const getHeroMovies = async (url) => {
  const {data} = await axios.get(url)
  const results =  data.results || [];

  return results.flatMap((item) =>
    item.media_type === "person" ? item.known_for || [] : item
  );
}

export const searchMovies = async (url) => {
  const {data} = await axios.get(url)
  return data.results || [];
}