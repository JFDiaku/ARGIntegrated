import React from 'react'
import TopNav from "../components/topNav"
import ScrollToTop from '../components/ScrollToTop'
import maint from "../images/maintenance.png"
import leafIcon from "../images/leafIcon.jpg";
const PipingCertSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />
      <ScrollToTop/>
      <section>
        <div className="about-banner resCharSVC-banner ">
          <div className="container ">
            <h2 className="about-title">Piping Certification and maintenance repair Services</h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section banner1">
        <div className="drillSVC-banner pipebanner">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={maint}></img>
          <h1 className="drillSVC-title">Wellhead Maintenance and Repair</h1>       
        </div>
      </section>

      <section>
        <div className="container">
        <div className="inspec-sec inspec-sec2">
          <p>
          ARG Integrated Energy is an international player in the wellhead maintenance services industry. We understand the 
          importance of providing our clients with the best inspection, repair, functionality testing and optimization and emergency intervention services. 
          Complying will global standards such as API 570 piping inspection will help you operate efficiently as well as avoid potential risks, emergencies and loss.
          <br />
          <br />
          Downtime in operation can cost you huge sums by the hour. The best way to get the most of your wellheads is implementing a thorough routine 
          maintenance program. Our experts are well trained with standard safety regulation handbooks and hands on experience to meet the highest specifications of risk assessment.
          <br />
          <br />
          ARG Integrated Energy is experienced in a multitude of AIP 570 wellhead applications and equipment to provide our clients independent, 
          high quality maintenance services. Get well executed well head maintenance at an affordable price. Our handy service technicians 
          are responsive and will help you get your problems solved quickly.
          <br />
          <br />
          To extend the operating life of your expensive equipment, ARG Integrated Energy has access to specialist in retrofitting wellhead parts 
          for configurations no longer actively supported such as:
          </p>


          <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Barton</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Breda</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Cameron</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Delta</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Flow Control</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>FMC</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Gray</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Vetco</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wellhead Inc.</p>
              </li>

            </ul>
        </div>
      </div>
      
      </section>

      
    </>
  )
}

export default PipingCertSVC 