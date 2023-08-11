import TopNav from "../components/topNav";
import "./contact.css"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({isMobileScreen}) => {
  return (
    <>
      <TopNav isMobileScreen={isMobileScreen}/>
      <section>
        <div className="about-banner contact-banner">
          <div className="container ">
            <h2 className="about-title">Contact us</h2>
          </div>
        </div>
      </section>


      <div className="container">
        <h1 className="contact-us-title">ARG Integrated Energy Services</h1>

        <div className="contacts-box">
          <div className="contacts-card">
            
            <PhoneIphoneIcon sx={{fontSize:'5em', color:'#35b416'}}/>

            <div className="contacts-card-title">Phone contact</div>
            <div>
              <p>+234 (0) 123 456 7890</p>
              <p>info@ARGintegrated.com</p>
            </div>
          </div>

          <div className="contacts-card">
          
            <LocationOnIcon sx={{fontSize:'5em', color:'#35b416'}}/>

            <div className="contacts-card-title">Our Nigerian office</div>

            <div>
              <p>1234 Address st, bld 5</p>
              <p>Abuja, Fedaral Capital Territory</p>
            </div>
          </div>
        </div>

        <div className="contact-bottom">

          <div className="contact-form-box">
            <form className="contact-form">
              <h1>Send us an Inquiry</h1>
              <input className="form-control" placeholder="Your Full Name"></input><br></br>
              <input className="form-control"  placeholder="Your Email Address"></input><br></br>
              <textarea className="form-control text-area" name="" id="" cols="30" rows="10" placeholder="Your Message Here"></textarea><br></br>
              <button>Send Us A Message</button>
            </form>
          </div>

          <div className="mapsection">
            <h1>Visit Our offices</h1>
            <div className="mapbox">
              <iframe width="100%" height="100%" className="iframe" 
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Abuja,%20Nigeria+(ARG%20Integrated%20Energy%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>     
        </div>
        </div>

      </div>
    </>
  )
}

export default Contact