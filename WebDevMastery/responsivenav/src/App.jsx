import React from 'react'

// import all component
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';


// import router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// importing Navbar
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;