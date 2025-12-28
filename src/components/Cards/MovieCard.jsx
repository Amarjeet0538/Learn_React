import Tags from "./Tags";
import { useState } from "react";
import DetailCard from "./DetailCard";
import { Clapperboard } from "lucide-react";

const MovieCard = ({
	adult,
	title,
	overview,
	imageUrl,
	type,
	language,
	release_date,
	vote_average,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="mx-3 my-3 font-sans text-white cursor-pointer w-60 h-108 bg-black rounded-lg relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{
				/* Default Movie Card */
				imageUrl ? (
					<img
						src={"http://image.tmdb.org/t/p/w342" + imageUrl}
						alt={title}
						style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
						className="rounded-lg w-full object-cover transition-transform duration-300 hover:scale-110 hover:z-100"
					/>
				) : (
					<div className="w-full h-80 bg-white/5 flex items-center justify-center rounded-lg">
						<Clapperboard size={80} />
					</div>
				)
			}

			<div className="flex flex-col my-2 py-1 px-2 relative">
				<div className="flex items-center">
					{adult && (
						<div className="bg-red-500 font-bold w-2 h-2 rounded-full mr-2">
							{" "}
						</div>
					)}
					<h1 className="font-bold text-lg pr-10 mb-1 truncate">{title}</h1>

					<p className=" absolute right-0 ml-2 font-light">
						{release_date?.substring(0, 4)}
					</p>
				</div>
				<div className="flex">
					<Tags content={type} />
					<Tags content={language} />
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
