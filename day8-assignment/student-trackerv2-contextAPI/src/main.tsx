import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router';
import { StudentContextProvider } from './context/studentContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudentContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>      
    </StudentContextProvider>
  </StrictMode>,
)
