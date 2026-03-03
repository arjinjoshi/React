import axios from 'axios';

// const apiKey:string = import.meta.env.VITE_TMDB_API_KEY as string ;`
const accessToken:string = import.meta.env.VITE_TMDB_API_KEY_ACCESS_TOKEN as string ;

const BASEURL = 'https://api.themoviedb.org/3/';

export const searchResult = async (activeTab: string, query: string) => {
    try{
        const response = await axios.get(`${BASEURL}search/${activeTab}`,{
            params: {
                query: query 
            },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
    
         return response.data.results;
    }catch(err){
        console.log("Error while fetching search Result:", err);
    }
}
export const fetchMovie = async (activeTab: string) => {
    try{
        const response = await axios.get(`${BASEURL}movie/${activeTab}`,{
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
         return response.data.results;
    }catch(err){
        console.log("Error while fetching search Result:", err);
    }
}
export const fetchTVSeries = async (activeTab: string) => {
    try{
        const response = await axios.get(`${BASEURL}tv/${activeTab}`,{
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
         return response.data.results;
    }catch(err){
        console.log("Error while fetching search Result:", err);
    }
}

