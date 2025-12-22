import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { DATA_URL } from "../utils/constants";
import DetailCard from "./DetailCard";

const Body = () => {
	const [data, setData] = useState([]);
	const url = DATA_URL;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await axios.get(url);
		setData(res.data);
	};

	return (
		<>
			{/* <div className="flex items-center justify-center font-sans text-white mt-10 m-4 flex-wrap ">
        <h1 className="w-full text-3xl m-4 ">TV Shows</h1>
        {data2.results.map((content) => {
        return (
          <MovieCard
            key={content.id}
            title={content.original_name}
            imageUrl={"https://image.tmdb.org/t/p/w342" + content.poster_path}
          />
        );
      })}
      </div>
 			*/}

			<div className="flex items-center justify-center font-sans text-white mt-10 m-4 flex-wrap">
				<h1 className="w-full text-3xl m-4">Anime</h1>
				{data &&  data.results && data.results.map((content) => {
						return (
							<MovieCard
								key={content.id}
								title={content.title}
								imageUrl={content.image}
								type={content.type}
								eps={content.episodes}
							/>
						);
					})}
			</div>
		</>
	);
};

export default Body;
