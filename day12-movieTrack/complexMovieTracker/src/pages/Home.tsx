import { useState, type ChangeEvent } from "react";
import MovieList from "../components/MovieList";
import { searchMovies, type Movie } from "../services/movieapi";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchedVal, setSearchedVal] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const handleSubmit = async () => {
    if(!searchedVal.trim()) return;
    setIsSearching(true);
    try{
        const response: Movie[] = await searchMovies(searchedVal);
        if(response){
            setFilteredMovies(response);
        }
    }catch(e){
        console.log("Search Failed", e);
    }finally{
        setIsSearching(false);
        setSearchedVal("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement, Element>) => {
    setSearchedVal(e.target.value);
  };



  return (
    <div>
      <div>
        <div className="flex justify-center my-10">
          <input
            className="border px-15 py-3 text-xl rounded-md"
            value={searchedVal}
            onChange={handleChange}
            type="text"
            placeholder="Search for movies..."
            name=""
            id=""
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="tracking-wider px-5 py-2 rounded-md bg-amber-500 text-xl mx-5"
          >
            {isSearching ? "Searching..." : "Search"}
          </button>
        </div>
          <>
          {filteredMovies.length !== 0 && <div>
                <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Searched Results:</h2>           
                <div  className='ml-10 flex flex-wrap gap-x-15'>
                    {filteredMovies.map(picture => <MovieCard key={picture.id} movie={picture}/>)}
                </div>
            </div>}
            <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">
              Now Playing
            </h2>
            <MovieList url="now_playing" />
            <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">
              Popular
            </h2>
            <MovieList url="popular" />
            <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">
              Top Rated
            </h2>
            <MovieList url="top_rated" />
            <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">
              Upcoming
            </h2>
            <MovieList url="upcoming" />
          </>
      </div>
    </div>
  );
};

export default Home;
