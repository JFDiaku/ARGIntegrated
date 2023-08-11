import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projSlide.css";
import field from "../images/service1.jpg"
import oilpic5 from "../images/oilpic5.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import service2 from  "../images/service2.webp"
import service3 from "../images/service3.jpg"
import oilpic6 from "../images/oilpic6.jpg"
import ropeAcess from "../images/ropeAcess.jpg"
import earth from "../images/earth.jpg"
import drill3 from "../images/drill3.jpg"
import service5 from "../images/service5.jpg"

const AboutSlide = () => {
  return (
    <>
      <div className="container aboutSlide-container" >

                
        <Carousel showThumbs={false} emulateTouch="true" interval={5000} infiniteLoop={true}>
          <div className="aboutsupport-slide">

            <div className="about-left">
              <p className="about-cap">Who we are?</p>
              <h3 className="about-Slidetitle">Welcome to ARG Integrated Energy Services</h3>

              <p className="about-descrip">
                 A renowned International Oil & Gas Company specializing in comprehensive energy consultation
                 and management services. With a strong presence across the globe, we have built a reputation for excellence, 
                 reliability, and efficiency in the energy sector. 
              </p>


            </div>

            <div className="about-right">
              <img  src={drill3}></img>
            </div>

          </div>

          <div className="aboutsupport-slide">

          <div className="about-left">
            <p className="about-cap">What we do?</p>
            <h3 className="about-Slidetitle">Deliver, Surpass, Add Value</h3>

            <p className="about-descrip">
              At ARG Integrated, we understand the complexities and challenges of the industry, and our team of seasoned experts is
               committed to delivering tailored solutions that cater to the unique needs of our clients. We offer a wide range of services,
              including energy efficiency assessments, strategic planning, risk management, and regulatory compliance, all aimed at optimizing our clients' energy resources and minimizing operational costs
            </p>

            

          </div>

          <div className="about-right">
            <img src={service5}></img>
          </div>

          </div>

          <div className="aboutsupport-slide">

          <div className="about-left">
            <p className="about-cap">Why choose us? </p>
            <h3 className="about-Slidetitle">Innovative solutions, Industry experts</h3>

            <p className="about-descrip">
            Our cutting-edge technologies and data-driven approach empower businesses to make informed decisions,
             maximize their energy potential, and embrace sustainability. As a company dedicated to promoting responsible 
             energy practices, we are steadfast in our commitment to environmental preservation, safety, and community development.
            </p>

            

          </div>

          <div className="about-right">
            <img src={oilpic6}></img>
          </div>

          </div>

          <div className="aboutsupport-slide">

          <div className="about-left">
            <p className="about-cap">Where we work?</p>
            <h3 className="about-Slidetitle">Americas, Sub-Saharan Africa, Middle east ,and Asia</h3>

            <p className="about-descrip">
              Our years of dedicated hard work and experience in the industry have helped us build a network of 
              leveraged partnerships all over the world. No matter where you are, we’re there for you.
            </p>

            

          </div>

          <div className="about-right">
            <img src={earth}></img>
          </div>

          </div>
        </Carousel>


      </div>


    </>
  )
}

export default AboutSlide