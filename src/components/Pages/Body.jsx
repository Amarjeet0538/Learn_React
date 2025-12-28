import MovieCard from "../Cards/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
	MOVIE_DATA_URL,
	SEARCH_URL,
	LANGUAGE_MAP,
} from "../../utils/constants";
import ShimmerCard from "../Cards/ShimmerCard";

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
			fetchMovies(`${SEARCH_URL}${query}`);
		}, 500);

		return () => clearTimeout(timer);
	}, [query]);

	const fetchMovies = async (url) => {
		try {
			setLoading(true);
			const res = await axios.get(url);
			const results = res.data.results || [];

			// 🔹 Normalize TMDB data
			const normalized = results.flatMap((item) => {
				if (item.media_type === "person") {
					return item.known_for || [];
				}
				return item;
			});

			setMovies(normalized);
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
				<div className="w-full flex items-center justify-center flex-wrap">
					{Array.from({ length: 14 }).map((_, i) => (
						<ShimmerCard key={i} />
					))}
				</div>
			)}

			{!loading && movies.length === 0 && (
				<p className="w-full text-center text-white/60">No results found</p>
			)}

			{movies.map((content) => (
				<MovieCard
					key={`${content.id}-${content.media_type}`}
					adult={content.adult}
					title={content.title || content.original_title || content.name}
					overview={content.overview}
					language={
						LANGUAGE_MAP[content.original_language] || content.original_language
					}
					release_date={content.release_date || content.first_air_date}
					vote_average={content.vote_average}
					imageUrl={content.poster_path}
					type={content.media_type}
				/>
			))}
		</div>
	);
};

export default Body;

