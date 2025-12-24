import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIE_DATA_URL, SEARCH_URL } from "../utils/constants";

const Body = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(MOVIE_DATA_URL);
  }, []);

  useEffect(() => {
    if (!query) {
      fetchMovies(MOVIE_DATA_URL);
      return;
    }

    const timer = setTimeout(() => {
			console.log("Fetching movies for query:", query);
      fetchMovies(`${SEARCH_URL}${query}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);


	const fetchMovies = async (url) => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setMovies(res.data.results || []);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center font-sans text-white mt-10 m-4 flex-wrap">
      <h1 className="w-full text-3xl m-4">
        {query ? `Results for "${query}"` : "Trending Movies"}
      </h1>

      {loading && (
        <p className="w-full text-center text-white/60">
          Loading...
        </p>
      )}

      {!loading && movies.length === 0 && (
        <p className="w-full text-center text-white/60">
          No results found
        </p>
      )}

      {movies.map((content) => (
        <MovieCard
          key={content.id}
          title={content.title || content.name}
          imageUrl={content.poster_path}
          type={content.media_type}
          eps={content.episodes}
        />
      ))}
    </div>
  );
};

export default Body;
