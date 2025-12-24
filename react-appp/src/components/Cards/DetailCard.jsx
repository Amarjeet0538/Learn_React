import {Play,Bookmark} from 'lucide-react'
import Tags from "./Tags";

const DetailCard = ({ title, imageUrl, type, eps }) => {
  return (
    <div className="absolute inset-0 text-white w-60 h-108 bg-black rounded-lg animate-fadeIn transition-transform duration-1000 scale-110 z-20">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full h-full object-cover blur-xs brightness-50"
      />
      <Play
        size={50}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/70 p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer'
      />
      <Bookmark
        size={40}
        className='absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors duration-300 drop-shadow-lg cursor-pointer'
      />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col py-3 px-3 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h1 className="font-bold text-lg truncate">{title}</h1>
        <div className="flex mt-2">
          <Tags content={type}/>
          <Tags content={eps} type="eps"/>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
