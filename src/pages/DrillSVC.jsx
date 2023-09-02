import TopNav from "../components/topNav"
import "./drillSVC.css"
import drillRig from "../images/drilling-rig.png"
import fieldRig from "../images/oil-rig.png"
import leafIcon from "../images/leafIcon.jpg";
import ScrollToTop from "../components/ScrollToTop";
import field from "../images/service1.jpg"

const DrillSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />

      <section>
        <div className="about-banner drillSVC-banner1 ">
          <div className="container ">
            <h2 className="about-title">Drilling and Field Services</h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section">
        <div className="drillSVC-banner  banner1">
        </div>
        <div className="container drillSVC-container cont-1">
          <img className="drillSVC-icon" src={drillRig}></img>
          <h1 className="drillSVC-title">Field Services</h1>       
        </div>
      </section>

      <section className="drillSVC-section2 top-sec">
        <div className="container">
          <div className="drillSVC-textBox">
            <div className="drilling-services-text">
              <p>
                ARG Integrated Energy is one of the best Oil and Gas Companies in Nigeria, providing industry 
                standard services and equipment to support all stages of the oil field production lifecycle. Ensure your project meets schedule and budget requirements. We’ll support you from your technicians to your drillers.
                <br />
                <br/>
                <div className="drillSVC-item1">
                  <p>
                    <u>Services Include:</u>
                  </p>
                </div>
              </p>
            </div>
            <ul className="drilling-services-list">
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Chemical Pumps</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Chemical Storage Handling</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Chemical Tankers</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Filtrations</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Oil Pumps</p>
              </li>
              <li className="drilling-services-item">
                <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                <p>Vacuum Tankers</p>
              </li>
            </ul>
           </div>
        </div>
      </section>


      <section className="drillSVC-section">
        <div className="drillSVC-banner">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={fieldRig}></img>
          <h1 className="drillSVC-title">Drilling Services</h1>       
        </div>
      </section>


      <section className="drillSVC-section2">
        <div className="container">
          <div className="drillSVC-textBox2">
            
              <div className="drillSVC-item">
                <p>
                <u>Cementing Services:</u> Our trustworthy cementing technology is innovative and ensures zonal isolation in all environments for the entire lifespan of the well.
                </p>
                

                <ul className="cementingSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Cement Evaluation</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Deepwater Cementing Technologies</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Gas Migration Control</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Lost Circulation Solutions</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Mud Removal and Spacer Fluids</p>
                  </li>
                </ul>
              </div>


              <p className="drillSVC-item1">
                <u>Contract Drilling:</u> Our access to fleets of land rigs help deliver our international 
                contract drilling services seamlessly to our high demanding clients.
              </p>

              <p className="drillSVC-item1">
                <u>Drill Bits:</u> All projects have unique drilling challenges depending on the
                 environmental formations. Our vast selection of rock-destruction techniques meets any challenge.
              </p>
              

              <div className="drillSVC-item">
                <p>
                <u>Drilling Applications:</u> Our prime concern is safety and risk reduction when providing drilling application services to
                 client Oil and Gas Companies in Nigeria. We have a team of experts with years of experience in the field operating in challenging environments. 
                </p>
                

                <ul className="cementingSVC-list drillApp-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Deepwater Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Extended-Reach Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>HDD, Mining &Waterwell</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>High-Pressure, High-Temperature Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Multilateral Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Unconventional Resources</p>
                  </li>
                </ul>
              </div>

              <p className="drillSVC-item1">
                <u>Drilling Equipment Sales & Rentals:</u> Buy or rent our wide range of directional drilling technologies to meet all your operational requirements.
              </p>
          

              <div className="drillSVC-item">
                <p>
                <u>Drilling Fluid Solutions, Systems & Products:</u> Innovative drilling systems, fluids and solutions will handle your diverse operating environments.
                </p>
                

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Fluid Products</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Fluid Simulation Software</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Fluid Solutions</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Fluid Systems</p>
                  </li>

                </ul>
              </div>
            
              <div className="drillSVC-item">
                <p>
                <u>Drilling Services & Systems:</u> Increase your well and drilling intervention 
                efficiency with our drilling technology offerings for all conditions.
                </p>
                

                <ul className="cementingSVC-list drillSYS-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Casing-Drilling and Liner-Drilling Technology</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Directional Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Optimization</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Fishing Services</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Managed Pressure Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Rhino Integrated Borehole Enlargement System</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Seismic-Guided Drilling</p>
                  </li>

                </ul>
              </div>


              <div className="drillSVC-item">
                <p>
                <u>Drilling Tools & Products:</u> For your specialty or standard drilling applications, we have a comprehensive offering of downhole services and products.
                </p>
                

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Jars & Impact Tools</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Oilfield Tool Rentals</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Reamers & Stabilizers</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Tubulars & Tubular Services</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Underreamers</p>
                  </li>
                </ul>
              </div>


              <div className="drillSVC-item">
                <p>
                <u>Engineering & Real-Time Analysis:</u> Dynamic real-time performance monitoring, optimization, and evaluation services supporting all
                 phases of well design, development, implementation, operation and maintenance.
                </p>
                

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Drilling Performance Services</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Surface Formation Evaluation Services</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Well Placement Services</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Wellbore Quality Services</p>
                  </li>
                </ul>
              </div>

              <div className="drillSVC-item">
                <p>
                <u>Fluids Processing:</u> State of the art techniques for drilling and production waste management for Oil and Gas Companies in Nigeria.
                </p>

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>ATC Automatic Tank-Cleaning Technology</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Fluids Processing</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Mud Cooler</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Mud Mixing</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Pressure & Fluid Management System Technology</p>
                  </li>
                </ul>
              </div>



              <div className="drillSVC-item">
                <p>
                <u>LWD & MWD:</u> Optimize reservoir formation, mapping, geosteering and evaluation 
                decisions with our high-resolution measurements enabling look-ahead capabilities.
                </p>

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Geomechanics While Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Geophysics While Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Petrophysics While Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Reservoir Engineering While Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Reservoir Mapping While Drilling</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Well Placement</p>
                  </li>

                </ul>
              </div>


              <div className="drillSVC-item">
                <p>
                <u>Solids Control & Cuttings Management:</u>  Remove solids to ensure drilling fluid integrity and collect, 
                treat or reinject cuttings with our special equipment and services.
                </p>

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Centrifuges</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Cuttings Collection & Transport</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Cuttings Dryers</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Cuttings Treatment</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Mud Cleaners</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Optimizing Solids Control System</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Reusable Fluid Processing System</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Screening Fluid and Cuttings Separator</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Shaker Screens</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Shale Shakers</p>
                  </li>
                </ul>
              </div>

              <p className="drillSVC-item1">
                <u>Surface Logging Services:</u> Get decision-ready information on drilling performance,
                 well status, lithology, reservoir fluid composition and more with our surface services.
              </p>



              <div className="drillSVC-item">
                <p>
                <u>Wellhead Systems:</u> Reduce installation time and enhance safety of geothermal wells, unconventional plays,
                 jackup rigs and more with our conventional and application-specific systems.
                </p>

                <ul className="cementingSVC-list drillFluidSVC-list">
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Conventional Wellhead System</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Geothermal Wellhead Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Heavy Oil Wellhead Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Modular Compact Wellhead Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Multibowl Wellhead Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Shallow-Water Exploration Wellhead Systems</p>
                  </li>
                  <li className="drilling-services-item">
                    <img src={leafIcon} alt="leafIcon" className="leafIcon" />
                    <p>Wellhead Connectors</p>
                  </li>
                </ul>
              </div>





          </div>
        </div>
      </section>
      

      <ScrollToTop/>
    </>
  )
}

export default DrillSVC