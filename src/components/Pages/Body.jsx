import MovieCard from "../Cards/MovieCard";
import { useEffect, useState, useRef } from "react";
import { getHeroMovies, searchMovies } from "../../api/movies";
import {
  TRENDING_MEDIA_DATA_URL,
  POPULAR_MOVIE_DATA_URL,
  NOW_PLAYING_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
  SEARCH_URL,
  LANGUAGE_MAP,
} from "../../utils/constants";
import ShimmerCard from "../Cards/ShimmerCard";

const Body = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [trendingPage, setTrendingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);

  const [loadingTrending, setLoadingTrending] = useState(false);
  const [loadingPopular, setLoadingPopular] = useState(false);
  const [loadingNowPlaying, setLoadingNowPlaying] = useState(false);
  const [loadingTopRated, setLoadingTopRated] = useState(false);
  const [loadingUpcoming, setLoadingUpcoming] = useState(false);

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await searchMovies(`${SEARCH_URL}${query}`);
        setMovies(results);
      } catch {
        setError("Search failed");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSection = async (url, page, setData, setLoadingState) => {
    try {
      setLoadingState(true);
      const data = await getHeroMovies(`${url}&page=${page}`);
      setData((prev) => (page === 1 ? data : [...prev, ...data]));
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    if (!query) fetchSection(TRENDING_MEDIA_DATA_URL, trendingPage, setTrending, setLoadingTrending);
  }, [query, trendingPage]);

  useEffect(() => {
    if (!query) fetchSection(POPULAR_MOVIE_DATA_URL, popularPage, setPopular, setLoadingPopular);
  }, [query, popularPage]);

  useEffect(() => {
    if (!query) fetchSection(NOW_PLAYING_URL, nowPlayingPage, setNowPlaying, setLoadingNowPlaying);
  }, [query, nowPlayingPage]);

  useEffect(() => {
    if (!query) fetchSection(TOP_RATED_URL, topRatedPage, setTopRated, setLoadingTopRated);
  }, [query, topRatedPage]);

  useEffect(() => {
    if (!query) fetchSection(UPCOMING_URL, upcomingPage, setUpcoming, setLoadingUpcoming);
  }, [query, upcomingPage]);

  const handleScroll = (setter) => (e) => {
    const el = e.target;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 500) {
      setter((p) => p + 1);
    }
  };

  const renderRow = (title, data, loading, onScroll) => (
    <>
      <h1 className="w-full text-3xl m-4">{!query && title}</h1>
      {!query && (
        <div onScroll={onScroll} className="w-full flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide">
          {data.map((m) => (
            <div key={m.id} className="flex-shrink-0">
              <MovieCard
                title={m.title || m.name}
                overview={m.overview}
                language={LANGUAGE_MAP[m.original_language] || m.original_language}
                release_date={m.release_date || m.first_air_date}
                vote_average={m.vote_average}
                imageUrl={m.poster_path}
                type={m.media_type}
              />
            </div>
          ))}
          {loading && Array.from({ length: 3 }).map((_, i) => <ShimmerCard key={i} />)}
        </div>
      )}
    </>
  );

  return (
    <div className="flex flex-wrap justify-center text-white mt-10 m-4">
      {query && <h1 className="w-full text-3xl m-4">Results for "{query}"</h1>}

      {loading && Array.from({ length: 14 }).map((_, i) => <ShimmerCard key={i} />)}

      {query &&
        movies.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title || m.name}
            overview={m.overview}
            language={LANGUAGE_MAP[m.original_language] || m.original_language}
            release_date={m.release_date || m.first_air_date}
            vote_average={m.vote_average}
            imageUrl={m.poster_path}
            type={m.media_type}
          />
        ))}

      {renderRow("Trending", trending, loadingTrending, handleScroll(setTrendingPage))}
      {renderRow("Popular", popular, loadingPopular, handleScroll(setPopularPage))}
      {renderRow("Now Playing", nowPlaying, loadingNowPlaying, handleScroll(setNowPlayingPage))}
      {renderRow("Top Rated", topRated, loadingTopRated, handleScroll(setTopRatedPage))}
      {renderRow("Upcoming", upcoming, loadingUpcoming, handleScroll(setUpcomingPage))}
    </div>
  );
};

export default Body;
