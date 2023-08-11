import TopNav from "../components/topNav";
import oilRig from "../images/oil-rig.png"
import projSupport from "../images/project-support.png"
import testing from "../images/testing.png"
import riskManage from "../images/risk-Manage.png"
import inspection from "../images/inspection.png"
import maint from "../images/maintenance.png"
import "./services.css"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


const Services = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen}/>
      
      
      <section>
        <div className="about-banner Services-banner">
          <div className="container ">
            <h2 className="about-title Services-title">Our Services</h2>
          </div>
        </div>

        
      </section>
      
      <div className="Services-Box">

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      src={oilRig}></motion.img>
                  </AnimatePresence>
                </div>
                
                <h4 className="Service-card-title">
                  Drilling and Filed Services
                </h4>
              </a>
              
              <p className="Service-card-text" >
              industry standard services and equipment to support all stages of the oil field production lifecycle. 
              Ensure your project meets schedule and budget requirements. We’ll support you from your technicians to your drillers
              </p>
          </div>

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      src={projSupport}></motion.img>
                  </AnimatePresence>
                </div>
                
                <h4 className="Service-card-title">
                  project Support Services
                </h4>
              </a>
              
              <p className="Service-card-text" >
                ARG Energy provides a comprehensive range of inspections required to operate within industry standard and legal standards.
                Our scalable teams will be able to support you in on the spot and project related nondestructive testing (NDT) work.
              </p>
            </div>

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                  <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      src={inspection}></motion.img>
                  </AnimatePresence>
                  
                </div>
                
                <h4 className="Service-card-title">
                  Resevoir Characterization and Manpower Services
                </h4>
              </a>
             
              <p className="Service-card-text" >
              In order to get the most out of your reservoir you must have a thorough knowledge of its operation and characteristics throughout its lifetime. 
              Our Oilfield Services, petrochemical subject matter 
              expertise and tools will help you gain insight into your reservoir fluids and rocks with precise measurements.
              </p>
            </div>

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      src={testing}></motion.img>
                  </AnimatePresence>
                </div>
                
                <h4 className="Service-card-title">
                  Testing and Integrity Management
                </h4>
              </a>
              
                <p className="Service-card-text" >
                Whether you need offshore or onshore production and exploration well testing anywhere in the world, 
                ARG Integrated Energy is the Asset Integrity Management company for you. We provide integral aspects of
                reservoir management for both operational fields and new project development.
                </p>
            </div>

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      src={riskManage}></motion.img>
                  </AnimatePresence>
                </div>
                
                <h4 className="Service-card-title">
                  Inspection and Risk Management
                </h4>
              </a>
              
                <p className="Service-card-text" >
                In order to properly inspect any situation, you first must have a proper understanding of all the variables at play
                 as well as the contextual operating environment. We implement a Risk Based Inspection approach that considers the potentialities of
                  occurrences as well as their associated impact damage potential.
                </p>
            </div>

            <div className="Service-card">
              <a href="#" className="ServiceLink">
                <div className="Service-icon">
                <AnimatePresence>
                    <motion.img
                      whileHover={{width:'30%', opacity:(.6)}}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      src={maint}></motion.img>
                  </AnimatePresence>
                </div>
                
                <h4 className="Service-card-title">
                  Piping Certification and Maintenace repair
                </h4>
              </a>
            
              <p className="Service-card-text" >
                ARG Integrated Energy is an international player in the wellhead maintenance services industry. 
                We understand the importance of providing our clients with the best inspection, repair, functionality testing and optimization and emergency intervention services. Complying will global standards such as API 570 piping inspection will help you operate efficiently as well as avoid potential risks, emergencies and loss.
              </p>
            </div>

            

          </div>

          <section className="inquiry-section serviceInquiry">
            <div className="container">
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

export default Services