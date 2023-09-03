import "./testingSVC.css"
import TopNav from "../components/topNav"
import ScrollToTop from '../components/ScrollToTop'
import testing from "../images/testing.png"

import leafIcon from "../images/leafIcon.jpg";

const TestingSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />
      <ScrollToTop/>
      <section>
        <div className="about-banner resCharSVC-banner ">
          <div className="container ">
            <h2 className="about-title">Testing and Integrity Management</h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section banner1">
        <div className="drillSVC-banner testBanner1">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={testing}></img>
          <h1 className="drillSVC-title">Surface Well-Testing</h1>       
        </div>
      </section>


      <section>
        <div className="rescharSVC-topsec">
          <p>
            Whether you need offshore or onshore production and exploration well testing anywhere in the world,
             ARG Integrated Energy is the <b>Asset Integrity Management </b>company for you. We provide integral aspects of reservoir management for both operational fields and new project development.
            <br />
            <br />
            Get access to the latest and greatest tools and equipment for different surface application. 
            Our skilled experts help to implement these packages to meet the most stringent demands and requirements.
            <br />
            <br />
            ARG Integrated  Energy <b>Asset Integrity Management </b> utilizes cutting edge data acquisition systems to test extremely 
            high-pressure wells. Our equipment and capability enhance the integrity of the data collected during all phase of the well testing process.
            <br />
            <br />
            If you require post-frac clean up services our skilled team provides in-line sand management services and systems. 
            Developing HP/HT gas/condensate reserves can be a trick process. High performance multiphase flowmeters help optimize the effort.
            <br />
            <br />
            Our <b>Asset Integrity Management </b> techniques and equipment are compliant with all international standards and best practice. 
            Make the best choice when it comes to oil and gas services. Our excellent resume speaks for itself, and we’ll manage any project for efficient financial expenditure and optimized time management. Avoid any potential corrosion/degradation of your valuable assets.
          </p>
        </div>
      </section>


      <div className="testingSVC-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Surface Well-Testing services include:
            </p>

            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Early production facilities services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Exploration and production well testing</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Multiphase flowmeter</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Portable well test units</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Sand management and frac flow back services</p>
              </li>
            </ul>
           </div>
        </div>
      </div>


      <div className="testingSVC-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Benefits:
            </p>

            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Maximize your return on investment.</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Enrich Stakeholder Value</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Mitigate high business risks caused by accidents and loss of production</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Preventative maintenance of assets for increased utility</p>
              </li>

            </ul>
           </div>
        </div>
      </div>


      <section className="drillSVC-section banner1  ">
        <div className="drillSVC-banner rescharSVC-banner3 comm-banner">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={testing}></img>
          <h1 className="drillSVC-title">Commission Services</h1>       
        </div>
      </section>

      <div className="testingSVC-sec  comm-sec">
        <div className="container">
          <div className="drillSVC-textBox">

            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Maximize your return on investment.</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Enrich Stakeholder Value</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Mitigate high business risks caused by accidents and loss of production</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Preventative maintenance of assets for increased utility</p>
              </li>

            </ul>
           </div>
        </div>
      </div>


      <section className="drillSVC-section banner1 ">
        <div className="drillSVC-banner rescharSVC-banner3 comm-banner2">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={testing}></img>
          <h1 className="drillSVC-title  equipserv-title">Equipment Inspection Services</h1>       
        </div>
      </section>


      <div className="testingSVC-sec  comm-sec2">
        <div className="container">
          <div className="drillSVC-textBox">

            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Acoustic Emission</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Bolt inspection surveys</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Crane services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Dropped objects specialists and surveys</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Infrared thermographic surveys (IRT)</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Inspection and certification packages</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Ladder and fall protection surveys</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Lifting gear inspection</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Light (LUX) surveys</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Nondestructive Testing (NDT)</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>UT gauging of piping systems and pressure vessels</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Vibration analysis</p>
              </li>

            </ul>
           </div>
        </div>
      </div>

    </>
  )
}

export default TestingSVC