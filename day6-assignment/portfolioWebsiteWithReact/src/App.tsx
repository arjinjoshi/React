
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contactme from './pages/Contactme'

const App = () => {
  return (
    <div className='flex justify-center items-center m-full w-full'>
      <div className='w-300'>
        <Header/>
        <Routes>
          <Route index element={<Homepage/> }/>
          <Route path="/projects" element={ <Projects/> }/>
          <Route path='/skills' element= { <Skills/> } />
          <Route path='/contactme' element={ <Contactme/> } />
        </Routes>
      </div>
      
    </div>
  )
}

export default App