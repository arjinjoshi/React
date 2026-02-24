import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import WatchList from "./pages/WatchList";
import NowPlaying from "./pages/NowPlaying";
const App = () => {
  return (
    <div className='min-h-screen w-full h-full bg-gray-950 text-gray-50'>
      < NavBar />

      <Routes>
        <Route path = "/" element = { <Home/> } />
        <Route path = "/favorites" element = { <Favorites/> } />
        <Route path = "/watchlist" element = { <WatchList/> } />
        <Route path = "/popular" element = { <Popular/> } />
        <Route path = "/toprated" element = { <TopRated/> } />
        <Route path = "/upcoming" element = { <Upcoming/> } />
        <Route path = "/nowplaying" element = { <NowPlaying/> } />
      </Routes>

    </div>
  )
}

export default App