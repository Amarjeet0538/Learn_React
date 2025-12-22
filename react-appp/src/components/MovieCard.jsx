import Tags from "./Tags";
import { useState } from "react";
import DetailCard from "./DetailCard";

const MovieCard = ({ title, imageUrl, type, eps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="m-1 text-white cursor-pointer w-60 h-108 bg-black rounded-lg relative transition-transform duration-300 hover:scale-105 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Movie Card */}
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full object-cover"
      />
      <div className="flex flex-col my-1 py-1 px-2">
        <h1 className="font-bold text-lg truncate">
          {title}
        </h1>
        <div className="flex">
          <Tags content={type}/>
          <Tags content={eps} type="eps"/>
        </div>
      </div>

      {/* Detail Card on Hover */}
      {isHovered && (
        <DetailCard
          title={title}
          imageUrl={imageUrl}
          type={type}
          eps={eps}
        />
      )}
    </div>
  );
};


export default MovieCard;
