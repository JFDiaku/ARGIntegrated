import './NavBar.css'
import ARGlogo from "../images/ARGlogo.svg"


const NavBar = ({isMobileScreen}) => {
  
  
  {!isMobileScreen ? window.onscroll = function() {scrollFunction()} : ""}

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
              <img className='logo' src={ARGlogo} title='ARGlogo'/>
            </div>

            <ul className='Navlinks'>

              <li id='navItem1' className='navItem'>
                <a href='#'>Home</a>
              </li>

              <li id='navItem2' className='navItem'>
                <a href='#'>About</a>
              </li>

              <div className='dropdown'>
                <li id='navItem3' className='navItem'>
                  <a className='servicelink' href='#'>Our Services</a> 

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

              <li id='navItem4' className='navItem'>
                <a href='#'>Contact</a>
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