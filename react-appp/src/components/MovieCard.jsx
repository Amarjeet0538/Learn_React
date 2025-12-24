import Tags from "./Tags";
import { useState } from "react";
import DetailCard from "./DetailCard";
import { Clapperboard } from 'lucide-react';


const MovieCard = ({ title, imageUrl, type, eps }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="m-1 font-sans text-white cursor-pointer w-60 h-108 bg-black rounded-lg relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Default Movie Card */
			imageUrl?
			<img
				src={"http://image.tmdb.org/t/p/w342" + imageUrl}
				alt={title}
				style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
				className="rounded-lg w-full object-cover transition-transform duration-300 hover:scale-110 hover:z-100"
			/> : <div className="w-full h-80 bg-white/5 flex items-center justify-center rounded-lg">
				<Clapperboard size={80}/>
				</div>
			}

			<div className="flex flex-col my-1 py-1 px-2">
				<h1 className="font-bold text-lg truncate">{title}</h1>
				<div className="flex">
					<Tags content={type} />
					<Tags content={eps} type="eps" />
				</div>
			</div>

			{/* Detail Card on Hover */}
		</div>
	);
};

export default MovieCard;
