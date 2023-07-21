import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer';

function App() {
  
  const isMobileScreen = useMediaQuery('(max-width:1100px)');

  return (
    <Router>
      <NavBar isMobileScreen={isMobileScreen}/>
      <Routes>
        <Route path='/' element={<Home isMobileScreen={isMobileScreen} />}/>
        <Route path='/about' element={<About isMobileScreen={isMobileScreen} />}/>
        <Route path='/services' element={<Services isMobileScreen={isMobileScreen} />}/>
        <Route path='/contact' element={<Contact isMobileScreen={isMobileScreen} />}/>
      </Routes>
      <Footer isMobileScreen={isMobileScreen} />
    </Router >
  )
}

export default App
