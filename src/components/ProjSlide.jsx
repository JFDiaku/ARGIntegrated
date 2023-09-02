import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projSlide.css";
import service1 from "../images/service1.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import service2 from  "../images/service2.webp"
import service3 from "../images/service3.jpg"
import service4 from "../images/service4.jpg"
import ropeAcess from "../images/ropeAcess.jpg"
import maint from "../images/maint.jpg"
import { Link } from 'react-router-dom';

const ProjSlide = () => {
  return (
    <>
    
        <div className="container projSlide-container" >

          
            <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} interval={5000} infiniteLoop={true}>
              <div className="proJsupport-slide">

                <div className="proj-left">
                  <p className="proj-cap">Project Support Services</p>
                  <h3 className="proj-title">Project Management and support</h3>

                  <p className="proj-descrip">
                    Whether you need to update an ageing system, or you want a 
                    completely new build project ARG Integrated Energy has the personnel, 
                    ability and experience necessary for project success. 
                  </p>

                  <div className="buttonBox proj-Button">
                    <Link to="/ARGIntegrated/services/Project-Support-services" className="exploreBtn slideBTN">Learn More</Link>
                    <div className="btn-arrow1">
                      <div className="arrow">
                        <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                      </div>                   
                    </div>
                    
                  </div>

                </div>

                <div className="proj-right">
                  <img  src={service4}></img>
                </div>

              </div>

              <div className="proJsupport-slide">

              <div className="proj-left">
                <p className="proj-cap">Project Support Services Class</p>
                <h3 className="proj-title">Special Survey</h3>

                <p className="proj-descrip">
                  ARG Integrated Energy has the personnel, ability and experience to ensure your project succeeds on schedule and within budget.
                   Approved by the leading Authorities in the offshore industry. 
                </p>

                <div className="buttonBox proj-Button">
                  <Link to="/ARGIntegrated/services/Project-Support-services" className="exploreBtn slideBTN">Learn More</Link>
                  <div className="btn-arrow1">
                    <div className="arrow">
                      <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                    </div>                   
                  </div>
                  
                </div>

              </div>

              <div className="proj-right">
                <img src={service3}></img>
              </div>

              </div>

              <div className="proJsupport-slide">

              <div className="proj-left">
                <p className="proj-cap">Project Support Services </p>
                <h3 className="proj-title">Condition and Appliance Auditing</h3>

                <p className="proj-descrip">
                  ARG Integrated Energy has the experience and discernment you need for successful Rig Audit 
                  Services for the Oil and Gas industry. We can perform gap analysis against shipyard scope as well.
                </p>

                <div className="buttonBox proj-Button">
                <Link to="/ARGIntegrated/services/Project-Support-services" className="exploreBtn slideBTN">Learn More</Link>
                  <div className="btn-arrow1">
                    <div className="arrow">
                      <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                    </div>                   
                  </div>
                  
                </div>

              </div>

              <div className="proj-right">
                <img src={maint}></img>
              </div>

              </div>

              <div className="proJsupport-slide">

              <div className="proj-left">
                <p className="proj-cap">Project Support Services</p>
                <h3 className="proj-title">Rope Access Repair and Maintenance</h3>

                <p className="proj-descrip">
                  Even with modern techniques there are still areas that are hard to access by standard methods. 
                  We have IRATA qualified rope access professionals to meet your toughest challenges.
                </p>

                <div className="buttonBox proj-Button">
                <Link to="/ARGIntegrated/services/Project-Support-services" className="exploreBtn slideBTN">Learn More</Link>
                  <div className="btn-arrow1">
                    <div className="arrow">
                      <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                    </div>                   
                  </div>
                  
                </div>

              </div>

              <div className="proj-right">
                <img src={ropeAcess}></img>
              </div>

              </div>
            </Carousel>
         
          
         
         

       

        </div>
      

    </>
  )
}

export default ProjSlide