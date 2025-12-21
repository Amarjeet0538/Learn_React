

const MovieCard = ({
  title ,
  imageUrl,
}) => {

  let adult = true;
  return (
    <div className="m-3 bg-white/20 p-2 rounded-md text-white w-70 h-90">
      <img src={imageUrl} alt={title} className="w-full h-78 object-cover" />
      <div className="flex items-center">
      <div className={`border-none rounded-full w-2 h-2 ${adult ? "bg-amber-200" : "bg-red-200"}`}></div>
        <h1 className="text-left font-semibold text-lg m-2 truncate">{title}</h1>
      </div>

    </div>
  )
}

export default MovieCard