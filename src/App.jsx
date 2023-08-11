import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import UpBtn from './components/UpBtn';


function App() {
  
  const isMobileScreen = useMediaQuery('(max-width:1100px)');

  return (
    <Router>
      {isMobileScreen && <UpBtn/>}
      <NavBar isMobileScreen={isMobileScreen}/>
      <Routes>
        <Route path='/ARGIntegrated/' element={<Home isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/about' element={<About isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services' element={<Services isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/contact' element={<Contact isMobileScreen={isMobileScreen} />}/>
      </Routes>
      <Footer isMobileScreen={isMobileScreen} />
    </Router >
  )
}

export default App
 