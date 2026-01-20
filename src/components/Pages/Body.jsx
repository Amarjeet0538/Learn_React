import MovieCard from "../Cards/MovieCard";
import { useEffect, useState } from "react";
import { getHeroMovies, searchMovies } from "../../api/movies";
import {
	MOVIE_DATA_URL,
	SEARCH_URL,
	LANGUAGE_MAP,
} from "../../utils/constants";
import ShimmerCard from "../Cards/ShimmerCard";

const Body = ({ query }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;
		let timer;

		const loadData = async () => {
			try {
				setLoading(true);
				setError(null);

				const data = query
					? await searchMovies(`${SEARCH_URL}${query}`)
					: await getHeroMovies(MOVIE_DATA_URL);

				if (isMounted) setMovies(data);
			} catch (err) {
				console.error(err);
				if (isMounted) setError("Something went wrong. Try again.");
			} finally {
				if (isMounted) setLoading(false);
			}
		};

		if (query) {
			timer = setTimeout(loadData, 500);
		} else {
			loadData();
		}

		return () => {
			isMounted = false;
			clearTimeout(timer);
		};
	}, [query]);

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
