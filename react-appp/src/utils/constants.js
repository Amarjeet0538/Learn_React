import { TMDB_API_KEY } from "./api_key";

export const MOVIE_DATA_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`;

export const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=`;

export const LANGUAGE_MAP = {
	en: "English",
	ja: "Japanese",
	hi: "Hindi",
	ko: "Korean",
	fr: "French",
	fi: "Finnish",
	es: "Spanish",
	de: "German",
	it: "Italian",
	zh: "Chinese",
	ru: "Russian",
	pt: "Portuguese",
	ar: "Arabic",
	tr: "Turkish",
	th: "Thai",
	id: "Indonesian",
	nl: "Dutch",
	sv: "Swedish",
	pl: "Polish",
	ta: "Tamil",
	te: "Telugu",
	ml: "Malayalam",
	bn: "Bengali",
	ur: "Urdu",
};
