
const ShimmerCard = () => {
  return (
    <div className="m-1 font-sans text-white cursor-pointer w-60 h-108 bg-black/10 rounded-lg relative">
      <div className="w-full h-80 bg-white/6 flex items-center justify-center rounded-lg">
        <div className="animate-pulse">
          <div className="bg-black/40 rounded-lg w-full h-80"></div>
        </div>
      </div>
      <div className="flex flex-col my-6 py-1 px-2">
        <h1 className="font-bold text-lg truncate bg-black/30 rounded w-full h-6"></h1>
        <div className="flex mt-2">
          <div className="bg-black/30 rounded w-16 h-6 mr-2"></div>
          <div className="bg-black/30 rounded w-16 h-6"></div>
        </div>
      </div>
    </div>
  )
}

export default ShimmerCard