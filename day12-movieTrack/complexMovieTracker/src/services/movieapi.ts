const api_key = import.meta.env.VITE_TMDB_API_KEY as string;

export interface Movie{
    id: number ;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export interface TMDBResponse{
    results: Movie[];
}

if(!api_key){
    throw new Error ("Missing VITE_TMDB_API_KEY in .env")
}

export const getMovies = async (url:string): Promise<Movie[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=${api_key}`);
    if(!response.ok){
        throw new Error(`TMDB fetch failed: ${response.status} ${response.statusText}`)
    }
    const data: TMDBResponse = await response.json();
    return data.results;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    if(!response.ok){
        throw new Error(`TMDB fetch failed: ${response.status} ${response.statusText}`)
    }
    const data: TMDBResponse = await response.json();
    return data.results;
}