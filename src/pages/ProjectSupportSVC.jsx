import React from 'react'
import TopNav from "../components/topNav"
import ScrollToTop from "../components/ScrollToTop";
import projSupport from "../images/project-support.png"
import leafIcon from "../images/leafIcon.jpg";
import './projSupp.css';

const ProjectSupportSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />
      <section>
        <div className="about-banner drillSVC-banner1 ">
          <div className="container ">
            <h2 className="about-title">Project Support Services</h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section">
        <div className="drillSVC-banner  projSupp-banner">
        </div>
        <div className="container drillSVC-container cont-1">
          <img className="drillSVC-icon" src={projSupport}></img>
          <h1 className="drillSVC-title projSupppSVC-title">Services for Newbuilds and Refurbishment Works</h1>       
        </div>
      </section>


      <section className="drillSVC-section2 projSupp-sec ">
        <div className="container">
          <div className="drillSVC-textBox2">
            <div className="drilling-services-text projSupp-text ">
              <p>
              ARG Integrated Energy is one of the best <b>Oil and Gas Companies</b>  providing a comprehensive range of inspections required to 
              operate within industry standard and legal standards. We can handle specific inspections for unique jobs or provide a complete package for full mobilization covering all aspects of compliance. Our scalable teams will be able to support you in on the spot and project related nondestructive testing (NDT) work.
              </p>
            </div>

            <p className="drillSVC-item1">
              <u>Shipyard Facilities Auditing:</u> ARG Integrated Energy consultants provide detailed analysis of your facilities. 
              Get a better understanding of centralized or disparate locations for an informed analysis and decision-making process.
            </p>

            <p className="drillSVC-item1">
              <u>Class Special Survey: </u> Class satisfactory Special Surveys and reports are in high demand and require precise 
              professionals for proper completion.ARG Integrated Energy has a support team approved by the leading Class Authorities in the offshore industry.
            </p>

            <p className="drillSVC-item1">
              <u>Condition Auditing, Gap Analysis and Compliance Auditing Against Shipyard Scope:</u> ARG Integrated Energy has the experience and discernment
               you need for successful Rig Audit Services for the Oil and Gas industry.
            </p>

            <p className="drillSVC-item1">
              <u>Project Management & Support:</u> Whether Oil and Gas Companies need to update an ageing system,
               or you want a completely new build project ARG Integrated Energy has the personnel, ability and experience to ensure your project succeeds on schedule and within budget.
            </p>

            <p className="drillSVC-item1">
              <u>Rope Access Repair and Maintenance Assistance:</u> Even with modern techniques there are still areas that are hard to access by standard methods. We have Industrial Rope Access Trade Association 
              (IRATA) qualified rope access professionals to meet your toughest challenges.
            </p>

            
           </div>
        </div>
      </section>
      <ScrollToTop/>
    
    </>
  )
}

export default ProjectSupportSVC