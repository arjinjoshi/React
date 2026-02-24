import { use, useEffect, useState } from "react";
import type { Movie } from "../services/movieapi";
import { getMovies } from "../services/movieapi";
import MovieCard from "./MovieCard";

interface MovieProp {
  url: string;
}

const MovieList = ({ url }: MovieProp) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovies(url);
        setMovies(data);
      } catch (e) {
        console.log("Failed to fetch movies:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [url]);

  if (loading) return <p className="text-3xl">Loading movies...</p>;

  return (
    <div className="ml-10 flex flex-wrap gap-x-15">
      {movies.map((picture) => (
        <MovieCard key={picture.id} movie={picture} />
      ))}
    </div>
  );
};

export default MovieList;
