import TopNav from "../components/topNav";
import "./about.css"
import AboutSlide from "../components/AboutSlide";
import field from "../images/service1.jpg"
import drill2 from "../images/drill2.jpg"
import partner from "../images/partner.jpg"
import projserv from "../images/projserv.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"

const About = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen}/>
      <section>
        <div className="about-banner">
          <div className="container ">
            <h2 className="about-title">About the Company</h2>
          </div>
        </div>

        
      </section>
      <div className="container about-container">     
        <h1 className="about-title2"> An International Oil & Gas Company providing Energy consultation and management services</h1>

        <AboutSlide/>

        <div className="Aboutservices-section">

              <div className="aboutServ-card">
                <div className="imgBox">
                  <img className="serviceImg" src={field}></img>
                </div>
                
                
                <h3 className="aboutServ-title">We Aim to Please</h3>
                
                <div className="aboutServ-descrip">
                Nothings speaks for a company like its track record of proven success and happy clients.
                 We understand that your satisfaction equates to our wonderful reputation.
                </div>

               
                 
               
                
              </div>

              <div className="aboutServ-card">
                <div className="imgBox">
                  <img className="serviceImg" src={projserv}></img>
                </div>
                

                <h3 className="aboutServ-title" >Short or Long Term Engagement</h3>

                <div className="aboutServ-descrip">
                  Engage a subject matter expert to quickly come in and resolve an immediate problem.
                   Or work with a full management team for a new development project.
                </div>

               <a className="btnLink">
                 
                </a>
                
              </div>

              <div className="aboutServ-card">
                <div className="imgBox">
                  <img className="serviceImg" src={partner}></img>
                </div>
               

                <h3 className="aboutServ-title" >Strategic Partnerships</h3>

                <div className="aboutServ-descrip">
                  We help foreign companies break into new markets with local content services and strategic partnership opportunities. 
                  Explore possibilities with our International Oil & Gas Company.
                </div>
                
                <a className="btnLink">
                 
                </a>
               
                
              </div>

              

        </div>

      </div>

      <section className="inquiry-section">
        <div className="container inquiry-container">
          <div className="inquiry-box">
            <p className="inquiry-text">Fill out the quick inqiry form for more information and service options</p>

            <div className="buttonBox inquiry-btnBox">
              <button className="exploreBtn inquiry-btn">COMPLETE INQUIRY NOW</button>
              <div className="btn-arrow1 inquiry-arrow1">
                <div className="arrow">
                  <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                </div>                   
              </div>
              
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About