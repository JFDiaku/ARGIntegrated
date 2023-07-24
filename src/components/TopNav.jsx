import "./topNav.css";
import MenuIcon from '@mui/icons-material/Menu';
import ARGlogo from "../images/ARGlogo.svg"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowDownward } from "@mui/icons-material";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const TopNav = ({isMobileScreen}) => {
  const [navToggled, toggleNav] = useState(false);
  const [dropdown, toggleDropdown] = useState(false);

  let navClass = "mobNav"
  navClass += navToggled ? "-toggled" : "";


  let dropClass = "mobDropdown-menu"
  dropClass += dropdown ? "-toggled" : "";

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
   <>
    <div className="top-nav-section">
      <div className="container">
        <div className="topSection">
          <div className="topNav">



            {isMobileScreen && 
              <button onClick={() => toggleNav(!navToggled) (dropdown && toggleDropdown(false))} className="mobNav-btn">
                <Menu sx={{fontSize:"2.5em", color:"#35b416"}}/>
              </button>
            }

            <div className="logoBox-topNav">
              <img className='topNavlogo' src={ARGlogo} title='ARGlogo'/>
            </div>
          
            {!isMobileScreen &&
            <div className="topNav-contact">

            <div className="topNav-contact-card">
              <PhoneIphoneIcon sx={{fontSize:'2em', color:'#35b416'}}/>
              <div>
                <p>+234 (0) 123 456 7890</p>
                <p>info@ARGintegrated.com</p>
              </div>
            </div>

            <div className="topNav-contact-card">
              <LocationOnIcon sx={{fontSize:'2em', color:'#35b416'}}/>
              <div>
                <p>1234 Address st, bld 5</p>
                <p>Abuja, Fedaral Capital Territory</p>
              </div>
            </div>
            </div> }
            

            </div>
      </div>

      </div>
    </div>

    {!isMobileScreen && 
    <div className="top-nav-section2" >
    <div className="container">
      <div className="topNav-navBar">
        <ul className='Navlinks-topNav'>

            <li className='navItem'>
              <Link to='/ARGIntegrated/'>Home</Link>
            </li>

            <li  className='navItem'>
              <Link to='/ARGIntegrated/about'>About</Link>
            </li>

            <div className='dropdown'>
              <li  className='navItem'>
                <Link className='servicelink' to='/ARGIntegrated/services'>Our Services</Link> 

                <div className='dropdown-menu'>

                  <ul className='ServiceLinks'>
                    <li>
                      <a href='#'>Drilling and field services</a>
                    </li>
                    <li>
                      <a href='#'>Project Support Services</a>
                    </li>
                    <li>
                      <a href='#'>Reservoir Characterization & Manpower Services</a>
                    </li>
                    <li>
                      <a href='#'>Testing & Integrity Management</a>
                    </li>
                    <li>
                      <a href='#'>Inspection & Risk Management</a>
                    </li>
                    <li>
                      <a href='#'>Piping Certification, Maintenance & Repair</a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>

            <li  className='navItem'>
                <Link to='/ARGIntegrated/contact'>Contact</Link>
            </li>
            
          </ul>

            <ul className="socialLinks">
              <li  className='navItem'>
                <a href='#'>
                  <FacebookIcon/>
                </a>
              </li>

              <li  className='navItem'>
                <a href='#'>
                  <LinkedInIcon/>
                </a>
              </li>

              <li  className='navItem'>
                <a href='#'>
                  <TwitterIcon/>
                </a>
              </li>
            </ul>
      </div>
    </div>
  </div> }



  <AnimatePresence>
  
  {(isMobileScreen && navToggled ) &&
  <motion.div
    initial={{ opacity:0, height:0}}
    animate={{ opacity:1, height:'auto'}}
    exit={{ opacity:0, height:0}}
    transition={{duration:.3, ease:easeInOut}}
   className="mobNav">
    <ul className="mobNav-Links">
      <li className="mobNav-item">
        <Link to='/ARGIntegrated/'>Home</Link>
      </li>
      <li className="mobNav-item">
        <Link to='/ARGIntegrated/about'>About</Link>
      </li>
      <div className="mob-dropdown">
        <li className="mobNav-item">
          <Link to='/ARGIntegrated/services'>Our Services</Link>
            <button onClick={() => toggleDropdown(!dropdown)} className="dropArrow">
              {dropdown ? <ArrowDownward sx={{fontSize:"1.2em"}}/> : <ArrowForwardIosIcon sx={{fontSize:"1.2em"}}/> }
            </button>
        </li>
      </div>

      <AnimatePresence>
      {dropdown &&
      <motion.div
        initial={{ opacity:0, height:0}}
        animate={{ opacity:1, height:'auto'}}
        exit={{ opacity:0, height:0}}
        transition={{duration:.3, ease:easeInOut}}
      className="mobDropdown-menu">
        <ul className='mob-ServiceLinks'>
          <li className="mobNav-item">
            <a href='#'>Drilling and field services</a>
          </li>
          <li className="mobNav-item">
            <a href='#'>Project Support Services</a>
          </li>
          <li className="mobNav-item">
            <a href='#'>Reservoir Characterization & Manpower Services</a>
          </li>
          <li className="mobNav-item">
            <a href='#'>Testing & Integrity Management</a>
          </li>
          <li className="mobNav-item">
            <a href='#'>Inspection & Risk Management</a>
          </li>
          <li className="mobNav-item">
            <a href='#'>Piping Certification, Maintenance & Repair</a>
          </li>
        </ul>
      </motion.div>}
      </AnimatePresence>

      <li className="mobNav-item">
        <Link to='/ARGIntegrated/contact'>Contact</Link>
      </li>

      
    </ul>
  </motion.div>
  
  }
  </AnimatePresence>

    
  </>  
  )
}

export default TopNav