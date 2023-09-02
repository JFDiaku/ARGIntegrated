import TopNav from "../components/topNav"
import Slideshow from "../components/Slideshow"
import "./home.css"
import field from "../images/service1.jpg"
import drill2 from "../images/drill2.jpg"
import planet from "../images/planet.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import oilPic1 from "../images/oilPic1.jpg"
import oilPic4 from "../images/oilPic4.jpg"
import invest from "../images/invest.jpg"
import ProjSlide from "../components/ProjSlide"
import ResCharSlide from "../components/ResCharSlide"
import EngineeringIcon from '@mui/icons-material/Engineering';
import SpeedIcon from '@mui/icons-material/Speed';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop";

const Home = ({isMobileScreen}) => {
  
  
  const slides = [
    {
      src: oilPic1,
      caption: "Welcome to ARG Integrated Energy Services International Consortium",
      text: "Value Added Services Oil and Gas company",
    },
    {
      src: planet,
      caption: "International Oil and Gas Company of exellence",
      text: "providing expert Energy Consultation and Mangement services around the world",
    },
    {
      src: oilPic4,
      caption: "Global Reach and Experience , Local content",
      text: "Our footprint covers Countries accross Europe, the US, and China",
    },
  ]
  

  
  



  
  
  

  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />

      <Slideshow slides={slides} isMobileScreen={isMobileScreen} />

      <section style={{position:"relative"}}  >
        <div className="container services-container">
          <div className="services-section">

              <div className="serv-card">
                <div className="imgBox">
                  <img className="serviceImg" src={field}></img>
                </div>
                
                <p className="serv-caption">High Quality and Standard</p>
                <h3 className="serv-title">Field Services</h3>
                
                <div className="serv-descrip">
                ARG Energy provides industry standard services and equipment 
                to support all stages of the oil field production lifecycle.
                </div>

               
                  <Link to='/ARGIntegrated/services/Drilling-And-Field-services'  className="buttonBox">
                    <button className="exploreBtn">Explore</button>
                    <div className="btn-arrow1">
                      <div className="arrow">
                        <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                      </div>                   
                    </div>
                    
                  </Link>
               
                
              </div>

              <div className="serv-card">
                <div className="imgBox">
                  <img className="serviceImg" src={drill2}></img>
                </div>
                <p className="serv-caption">Best Tools and Equipment</p>
                <h3 className="serv-title" >Drilling Services</h3>

                <div className="serv-descrip">
                Our access to fleets of land, swamp and offshore rigs help deliver our international 
                contract drilling services seamlessly to our high demanding clients.
                </div>

               
                  <Link to='/ARGIntegrated/services/Drilling-And-Field-services' className="buttonBox">
                    <button className="exploreBtn">Explore</button>
                    <div className="btn-arrow1">
                      <div className="arrow">
                        <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                      </div>                   
                    </div>
                    
                  </Link>
              
                
              </div>

              <div className="serv-card">
                <div className="imgBox">
                  <img className="serviceImg" src={invest}></img>
                </div>
                <p className="serv-caption">On Time and With Budget</p>
                <h3 className="serv-title" >Project Management Services</h3>

                <div className="serv-descrip">
                  ARG Energy has the personnel, ability and experience to ensure your 
                  project succeeds on schedule and within budget.
                </div>
                
                
                  <Link to='/ARGIntegrated/services/Project-Support-services' className="buttonBox">
                    <button className="exploreBtn">Explore</button>
                    <div className="btn-arrow1">
                      <div className="arrow">
                        <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                      </div>                   
                    </div>
                    
                  </Link>
                
               
                
              </div>

              

          </div>
        </div>
      </section>

      <ProjSlide/>

      <ResCharSlide isMobileScreen={isMobileScreen}/>

      <section style={{backgroundColor:"black", color:"white"}} className="valserv-section">
        <div className="container valserv-container">
          <h2 className="valserv-title">Value Added Services Oil and Gas Company</h2>
          <p className="valserv-cap">ARG Integrated Energy Services</p>

          <div className="valservices">

            <div className="valserv-card">
              <div className="valserv-icon">
                < EngineeringIcon sx={{color:"#35b416", fontSize:"7em"}}/>
              </div>
              <p className="valserv-card-cap">
                Oilfield Services
              </p>
              <h4 className="valserv-card-title">
                Reservior Engineering
              </h4>
              <p className="valserv-card-text" >
               Reservoir engineering manages phase behavior and fluid flow.
              </p>
            </div>

            <div className="valserv-card">
              <div className="valserv-icon">
                < SpeedIcon sx={{color:"#35b416", fontSize:"7em"}}/>
              </div>
              <p className="valserv-card-cap">
                Oilfield Services
              </p>
              <h4 className="valserv-card-title">
                Reservoir Testing
              </h4>
              <p className="valserv-card-text" >
                Give yourself the best potential for success with a strategic testing.
              </p>
            </div>

            <div className="valserv-card">
              <div className="valserv-icon">
                < OilBarrelIcon sx={{color:"#35b416", fontSize:"7em",}}/>
              </div>
              <p className="valserv-card-cap">
                Oilfield Services
              </p>
              <h4 className="valserv-card-title">
                Wireline Conveyance
              </h4>
              <p className="valserv-card-text" >
              Take advantage of efficient wireline operations in highly deviated and deep wells.
              </p>
            </div>

            <div className="valserv-card">
              <div className="valserv-icon">
                < ContactSupportIcon sx={{color:"#35b416", fontSize:"7em"}}/>
              </div>
              <p className="valserv-card-cap">
                Oilfield Services
              </p>
              <h4 className="valserv-card-title">
              Real-Time Support
              </h4>
              <p className="valserv-card-text" >
              VPN technology for remote collaborate with management and operations.
              </p>
            </div>

            

          </div>
        </div>
      </section>

    <ScrollToTop/>

      
    </>
  )
}

export default Home