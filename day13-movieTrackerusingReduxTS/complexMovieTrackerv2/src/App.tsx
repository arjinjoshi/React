
import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import WatchList from "./pages/WatchList"
import WatchHistory from "./pages/WatchHistory"
import Movies from "./pages/Movies"
import TVShows from "./pages/TVShows"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col text-(--var2)">
         <Navbar/> 
         <div className="w-full py-2 px-5 min-h-screen h-auto flex flex-col bg-(--var1) ">
            
            <Routes>
              <Route path = "/" element = { <HomePage/> }/>
              <Route path = "/watchlist" element = { <WatchList/> } />
              <Route path = "/watchhistory" element = { <WatchHistory/> } />
              <Route path = "/movies" element = { <Movies/> }/>
              <Route path = "/tvseries" element = { <TVShows/> } />
            </Routes>
            <ToastContainer />
       </div>

    </div>
  )
}

export default App