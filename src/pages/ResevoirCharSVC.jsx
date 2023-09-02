import TopNav from "../components/topNav"
import ScrollToTop from "../components/ScrollToTop";
import "./rescharSVC.css"
import inspection from "../images/inspection.png"
import leafIcon from "../images/leafIcon.jpg";
const ResevoirCharSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />
      <ScrollToTop/>
      <section>
        <div className="about-banner resCharSVC-banner ">
          <div className="container ">
            <h2 className="about-title">Reservoir Characterization & Manpower Services </h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section banner1">
        <div className="drillSVC-banner rescharSVC-banner2">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={inspection}></img>
          <h1 className="drillSVC-title">Resevoir characterization</h1>       
        </div>
      </section>
     
     <section>
        <div className="rescharSVC-topsec">
          <h4 style={{color:"#35b416", fontWeight:"500", fontSize:'1.1em'}}>Optimize Oilfield Services and your reservoir performance with increased understanding</h4>
          <p>In order to get the most out of your reservoir you must have a thorough knowledge of its operation and characteristics throughout its lifetime. Our Oilfield Services, petrochemical subject
              matter expertise and tools will help you gain insight into your reservoir fluids and rocks with precise measurements.
          </p>
        </div>
      </section>
            


      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Petrophysics
            </p>
            <div className="drilling-services-text">
              <p>
              Laboratory analysis services, downhole measurements and formation testing services are used to help you characterize 
              fluid and rock properties for formation evaluation. Get a better understanding of your reservoir’s
               functionality and operational characteristics with our petrophysical analysis services that use a wide variety of measurements.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>LWD Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Reservoir Laboratory Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Surface Logging</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wireline Services</p>
              </li>
            </ul>
           </div>
        </div>
      </section>

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Geology
            </p>
            <div className="drilling-services-text">
              <p>
              Both macro and microgeological models are made using detailed measurements to the highest degree of tolerance for proper interpretation. 
              Ensure your well paths are guided to avoid hazards and achieve the best reservoir contact with the help of our help.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>LWD Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Rock Laboratory Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wireline Services</p>
              </li>
            </ul>
           </div>
        </div>
      </section>


     

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Geomechanics
            </p>
            <div className="drilling-services-text">
              <p>
              Understanding the broad range of strength and stiffness of rocks as they are exposed to changing forces during drilling, 
              production and completion of Oilfield Services is important. Gathering laboratory analysis of core samples and downhole 
              acoustic measurements helps to produce geomechanical models to optimize the development, production and eventual abandonment 
              of reservoirs.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Rock Laboratory Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wireline Services</p>
              </li>
            </ul>
           </div>
        </div>
      </section>


      

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
                Geophysics
              </p>
            <div className="drilling-services-text">
              <p>
              Having the technology and expertise for the job is critical when applying large-scale geophysics sensing. Develop 3D reservoir models for all types of environments with stratified insight. 
              Wellbore-scale petrophysical and seismic analysis provide detailed formation understanding.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>LWD Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wireline Services</p>
              </li>
            </ul>
           </div>
        </div>
      </section>


      

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Resevoir Engineering
            </p>
            <div className="drilling-services-text">
              <p>
              Reservoir engineering manages phase behavior and fluid flow for all fluids, in all geological settings and at all scales. Construct a holistic view of reservoir potential and performance outlook
               with services such as downhole fluid sampling and analysis, formation pressure measurement and laboratory PVT analysis.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>LWD Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Reservoir Engineering with Wireline Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Reservoir Laboratory Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Reservoir Testing</p>
              </li>
            </ul>
           </div>
        </div>
      </section>

      

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Resevoir Testing
            </p>
            <div className="drilling-services-text">
              <p>
              Both macro and microgeological models are made using detailed measurements to the highest degree of tolerance for proper interpretation. 
              Ensure your well paths are guided to avoid hazards and achieve the best reservoir contact with the help of our help.
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Interpretation Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>LWD Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Rock Laboratory Services</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Wireline Services</p>
              </li>
            </ul>
           </div>
        </div>
      </section>

      

      

      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
              Wireline conveyance
            </p>
            <div className="drilling-services-text">
              <p >
              Wireline tractors and conveyance systems integration will allow you to take advantage of 
            efficient wireline operations in highly deviated and deep wells. ur wireline conveyance systems ensure that you achieve a complete formation analysis.
              </p>
            
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>All-Terrain Wireline Tractor</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>High-Pull Wireline Conveyance System</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Torque-Balanced Composite Wireline Cable</p>
              </li>
            </ul>
           </div>
        </div>
      </section>


      <section className="reschar-sec" >
      <div className="container">
        <div className="reschar-item">
          
          <p className="drillSVC-item1 rescharSVC-item">
          Petrotechnical Services
          </p>
          <div className="drilling-services-text">
            <p >
            Combine the implementation of industry leading technology and reservoir subject matter
            expertise to architect optimal solutions in Oilfield Services and gas operations. Get a 
            better understanding of your reservoir’s functionality and characteristics.
            </p>
          </div>
        </div>
      </div>
      </section>


      <section className="reschar-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="drillSVC-item1 rescharSVC-item">
            Real-Time Operations Support
            </p>
            <div className="drilling-services-text supp-text">
              <p >
              ARG integrated offers Virtual private networking technology allowing you to remotely collaborate with management in well production and construction operations.
              Services include Remote Monitoring, Operations & Surveillance.
              </p>
            
            </div>
            
           </div>
        </div>
      </section>


      

      

      <section className="drillSVC-section banner1">
        <div className="drillSVC-banner rescharSVC-banner3">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={inspection}></img>
          <h1 className="drillSVC-title">Manpower Services</h1>       
        </div>
      </section>

      <section className="reschar-sec  reschar-bottomSec">
        <div className="container">
          <div className="drillSVC-textBox">
            <p className="manPower-text">
              The world of <b>Oilfield Services</b>  is rapidly transforming and requires an experienced and competent oil and gas workforce solution. 
              We develop and deliver performance-based services for clients who must remain agile to compete.
              <br />
              <br />
              We partner with large production operators all over the world to give our clients multiskilled consultants and contractors for
              any operation whether offshore or onshore. If you need to keep up with education and staff improvement, we offer a variety of training
              and certification programs. Specialist training like rig evacuation and fire safety courses, as well as training courses for conventional jobs like crane operators and drillers.
                <br />
                <br />
              Our professionals at ARG Integrated  Energy believe in a dedication to excellence, professionalism, safety and teamwork at all levels of the organization.
            </p>
           </div>
        </div>
      </section>


    </>
  )
}

export default ResevoirCharSVC