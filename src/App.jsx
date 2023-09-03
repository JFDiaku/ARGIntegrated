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
import DrillSVC from './pages/DrillSVC';
import InspectionSVC from './pages/InspectionSVC';
import PipingCertSVC from './pages/PipingCertSVC';
import ResevoirCharSVC from './pages/ResevoirCharSVC';
import TestingSVC from './pages/TestingSVC';
import ProjectSupportSVC from './pages/ProjectSupportSVC';

function App() {
  
  const isMobileScreen = useMediaQuery('(max-width:1100px)');

   
  {!isMobileScreen ? (window.onscroll = function(){scrollFunction()}) : ""};
  
  

  function scrollFunction() {
    if (document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }

  

  return (
    <Router>
      {isMobileScreen && <UpBtn/>}
      <NavBar isMobileScreen={isMobileScreen}/>
      <Routes>
        <Route path='/ARGIntegrated/' element={<Home isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/about' element={<About isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services' element={<Services isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Drilling-And-Field-services' element={<DrillSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Project-Support-services' element={<ProjectSupportSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Resevoir-Characterization-and-Manpower-services' element={<ResevoirCharSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Testing-and-Integrity-Management-services' element={<TestingSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Inspection-and-Risk-Management-services' element={<InspectionSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/services/Piping-certification-and-maintenance-repair-services' element={<PipingCertSVC isMobileScreen={isMobileScreen} />}/>
        <Route path='/ARGIntegrated/contact' element={<Contact isMobileScreen={isMobileScreen} />}/>
      </Routes>
      <Footer isMobileScreen={isMobileScreen} />
    </Router >
  )
}

export default App
 