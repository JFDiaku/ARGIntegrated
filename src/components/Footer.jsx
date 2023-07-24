import "./footer.css"
import ARGlogo from "../images/ARGlogo.svg"
import { Link } from 'react-router-dom'

const Footer = ({isMobileScreen}) => {
  return (
  <>
  <section className="footer-section">
   
      <div className={!isMobileScreen ? "footer" : "mob-footer"}>
        <div className="footer-sec1">
          <div className='footer-logoBox'>
            <img className='logo' src={ARGlogo} title='ARGlogo'/>
          </div>
          <p className="footer-text">
            We provide energy consultation and management 
            services to clients who need first class support. Our experience 
            and excellence have helped us build a global network of strategically leveraged partnerships.
          </p>
        </div>

        <div className="footer-sec3">
          <h2 style={{fontWeight:600}}>Services Suite</h2>
          <ul className="footer-serv">
            <li className="mobNav-item-footer">
              <a href='#'>Drilling and field services</a>
            </li>
            <li className="mobNav-item-footer">
              <a href='#'>Project Support Services</a>
            </li>
            <li className="mobNav-item-footer">
              <a href='#'>Reservoir Characterization & Manpower Services</a>
            </li>
            <li className="mobNav-item-footer">
              <a href='#'>Testing & Integrity Management</a>
            </li>
            <li className="mobNav-item-footer">
              <a href='#'>Inspection & Risk Management</a>
            </li>
            <li className="mobNav-item-footer">
              <a href='#'>Piping Certification, Maintenance & Repair</a>
            </li>
          </ul>
        </div>

      </div>
    </section>

      
      <div className={!isMobileScreen ? "footer2" : "mob-footer2"}>
        <p className="copyright">Copyright © 2023 ARG Energy Services.</p>

        <ul className="footerLinks">
          <li className='navItem'>
            <Link to='/ARGIntegrated/'>Home</Link>
          </li>

          <li  className='navItem'>
            <Link to='/ARGIntegrated/about'>About</Link>
          </li>

          <li className='navItem'>
            <Link to='/ARGIntegrated/services'>Our Services</Link>
          </li>

          <li  className='navItem'>
            <Link to='/ARGIntegrated/about'>Contact</Link>
          </li>
        </ul>
      </div>
  
  </>
  )
}

export default Footer