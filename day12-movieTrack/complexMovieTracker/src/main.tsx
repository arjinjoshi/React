import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { FavoriteContextProvider } from './context/favContext.tsx'
import { WatchListContextProvider } from './context/watchListContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoriteContextProvider>
      <WatchListContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>          
      </WatchListContextProvider>
    </FavoriteContextProvider>
  </StrictMode>,
)
