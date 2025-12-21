import MovieCard from "./MovieCard"
import data from "../assets/data.json"
import data2 from "../assets/data2.json"


const Body = () => {
  return (
    <>
     <div className="flex items-center justify-center font-sans text-white mt-10 m-4 flex-wrap">
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

      
    <div className="flex items-center justify-center font-sans text-white mt-10 m-4 flex-wrap">
      <h1 className="w-full text-3xl m-4 ">Movies</h1>
      {data.results.map((content) => {
        return (
          <MovieCard
            key={content.id}
            title={content.title.english || content.title.romaji}
            imageUrl={content.coverImage.large}
          />
        );
      })}
    </div>

    </>
  )
}

export default Body;