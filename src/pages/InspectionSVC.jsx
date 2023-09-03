import React from 'react'
import TopNav from "../components/topNav"
import ScrollToTop from '../components/ScrollToTop'
import riskManage from "../images/risk-Manage.png"
import leafIcon from "../images/leafIcon.jpg";


const InspectionSVC = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen} />
      <ScrollToTop/>
      <section>
        <div className="about-banner resCharSVC-banner ">
          <div className="container ">
            <h2 className="about-title">Inspection and Risk Management</h2>
          </div>
        </div>
      </section>

      <section className="drillSVC-section banner1">
        <div className="drillSVC-banner rescharSVC-banner2">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={riskManage}></img>
          <h1 className="drillSVC-title">Inspection Management</h1>       
        </div>
      </section>

      <section>
        <div className="container">
        <div className="inspec-sec">
          <p>
          In order to properly inspect any situation, you first must have a proper understanding of all the variables at play as well as the contextual operating environment. 
          We implement a <b style={{color:"#35b416"}}>Risk Based Inspection</b> approach that considers the potentialities of occurrences as well as their associated impact damage potential. Therefor, valuable 
          time is spent on the most critical aspects of your inspection project. Specialized surveys are used for more unique and dynamic issues that may require more attention.
          </p>
        </div>
      </div>
      </section>

      <section className="drillSVC-section banner1  ">
        <div className="drillSVC-banner rescharSVC-banner3 comm-banner">
        </div>
        <div className="container drillSVC-container">
          <img className="drillSVC-icon" src={riskManage}></img>
          <h1 className="drillSVC-title">Risk Management</h1>       
        </div>
      </section>

      <section>
        <div className="container">
        <div className="inspec-sec">
          <p>
          No matter how much planning and attention to detail you thrust into any project, there will be a risk potential that you need to manage. Utilizing a <b style={{color:"#35b416"}}>Risk Based Inspection</b> methodology is
           the best way to give your risk management efforts the best chance to pay off in the future. We assess different industry threat potential profiles that are in line with your specific
            project requirements. This gives us the ability to use historical and empirical evidence when analyzing threats and vulnerabilities. It also helps us develop the most efficient and
             effective remediation solutions.
          </p>
        </div>
        </div>
      </section>
    </>
  )
}

export default InspectionSVC 