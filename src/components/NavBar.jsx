import './NavBar.css'
import ARGlogo from "../images/ARGlogo.svg"
import { Link } from 'react-router-dom'

const NavBar = ({isMobileScreen}) => {
  
  
  {!isMobileScreen ? (window.onscroll = function(){scrollFunction()}) : ""};
  
  

  function scrollFunction() {
    if (document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }

  return (
    <>
    {!isMobileScreen &&
      <section>
        
          <nav id="navbar" className='Navbar'> 
          <div className='navContainer'>
            <div className='logoBox'>
              <Link to='/ARGIntegrated/'><img className='logo' src={ARGlogo} title='ARGlogo'/></Link>
            </div>

            <ul className='Navlinks'>

              <li id='navItem1' className='navItem'>
                <Link to='/ARGIntegrated/'>Home</Link>
              </li>

              <li id='navItem2' className='navItem'>
                <Link to='/ARGIntegrated/about'>About</Link>
              </li>

              <div className='dropdown'>
                <li id='navItem3' className='navItem'>
                  <Link className='servicelink' to='/ARGIntegrated/services'>Our Services</Link> 

                  <div className='dropdown-menu'>

                    <ul className='ServiceLinks'>
                      <li>
                        <Link to='/ARGIntegrated/services/Drilling-And-Field-services'>Drilling and field services</Link>
                      </li>
                      <li>
                        <Link to='/ARGIntegrated/services/Project-Support-services'>Project Support Services</Link>
                      </li>
                      <li>
                        <Link to='/ARGIntegrated/services/Resevoir-Characterization-and-Manpower-services'>Reservoir Characterization & Manpower Services</Link>
                      </li>
                      <li>
                        <Link to='/ARGIntegrated/services/Testing-and-Integrity-Management-services'>Testing & Integrity Management</Link>
                      </li>
                      <li>
                        <Link to='/ARGIntegrated/services/Inspection-and-Risk-Management-services'>Inspection & Risk Management</Link>
                      </li>
                      <li>
                        <Link to='/ARGIntegrated/services/Piping-certification-and-maintenance-repair-services'>Piping Certification, Maintenance & Repair</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </div>

              <li id='navItem4' className='navItem'>
                <Link to='/ARGIntegrated/contact'>Contact</Link>
              </li>
              

            </ul>
            </div>

          </nav>
        
      </section> 
      
    } 
    </>
  )
}

export default NavBar