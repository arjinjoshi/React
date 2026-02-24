import { Heart, Bookmark } from "lucide-react";
import type { Movie } from "../services/movieapi";
import { useFavoriteContext } from "../context/favContext";
import type { HTMLElementType } from "react";
import { useWatchListContext } from "../context/watchListContext";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const {addHandler, deleteHandler, isFavorite} = useFavoriteContext();
    const {addWatchList, removeFromWatch, isWatched} = useWatchListContext();

    const fav = isFavorite(movie.id);
    console.log("fav:", fav);

    const watched = isWatched(movie.id);

    const handleFavToggle = () => {
        console.log("Inside handle Toggle")
        if (fav) {
          deleteHandler(movie.id);
        } else {
          addHandler(movie);
        }
      };
    const handleWatchToggle = () => {
        console.log("Inside handle Toggle")
        if (watched) {
          removeFromWatch(movie.id);
        } else {
          addWatchList(movie);
        }
      };

  return (
    <div className="w-1/6 h-110 z-50 my-10 border-none relative group overflow-hidden transition-all duration-300 hover:scale-105">
      <img
        className="object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute  text-xl font-bold top-0 right-0 flex gap-5 p-2">
        <button onClick={handleFavToggle}>
        <Heart size={32} color = {fav? "red" : "white"} fill = {fav? "red" : "white"}/>
        </button>
        <button onClick={handleWatchToggle}>
        <Bookmark size={32} color = {watched? "red" : "white"} fill = {watched? "red" : "white"}/>
        </button>
      </div>
      <div className=" text-yellow-500 text-xl font-bold">
        <div className="absolute bottom-0 bg-linear-to-tl from-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="mt-15 px-5 flex justify-between items-center text-sm">
            <p>{movie.release_date?.split("-")[0]}</p>
            <p>{movie.vote_average.toFixed(2)} ⭐️</p>
          </div>
          <div className="text-sm px-5 pt-3">{movie.title}</div>
          <div className="text-sm px-5 pt-3 font-normal">
            {movie.overview.slice(0, 100) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
