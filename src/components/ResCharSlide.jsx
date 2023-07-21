import "./resChar.css"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import oilPic1 from "../images/oilPic1.jpg";
import service2 from "../images/service2.webp";
import petrophys from "../images/petrophys.jpg";
import drill from "../images/drillserv.jpg"
import geophys from "../images/geophys.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";


const resCharSlides = [
  {
    caption:`Reservoir Characterization`,
    title: "Petrophysics",
    text:`Laboratory analysis services, downhole measurements and formation testing services 
    are used to help you characterize fluid and rock properties for formation evaluation. Get a 
    better understanding of your reservoir’s functionality and characteristics.`,
    src: petrophys,
  },
  {
    caption:`Reservoir Characterization`,
    title: `Geology`,
    text:`Both macro and microgeological models are made using detailed measurements to the highest degree of 
    tolerance for proper interpretation. Ensure your well paths are guided to avoid hazards and achieve the best 
    reservoir contact with the help of our help.`,
    src: service2,
  },
  {
    caption:`Reservoir Characterization`,
    title: `Geomechanics`,
    text:`Understanding the broad range of strength and stiffness of rocks as they are exposed to changing forces during drilling, 
    production and completion of Oilfield Services is important. Gathering laboratory analysis helps to produce geomechanical optimization models.`,
    src: drill,
  },
  {
    caption:`Reservoir Characterization`,
    title: `Geophysics`,
    text:`Having the technology and expertise for the job is critical when applying large-scale geophysics sensing. Develop 3D reservoir models for all types 
    of environments with stratified insight. Wellbore-scale analysis provides detailed formation understanding`,
    src: geophys,
  },

]


const ResCharSlide = () => {
  const [fade, setFade] = useState(false);

  setTimeout(() => {
    let dots = document.getElementsByClassName("slideDot")
    console.log(dots)
  }, 1000);
  
  

  const [currentIndex, changeIndex] = useState(0);
  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === resCharSlides.length - 1


  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const newIndex = lastSlide ? 0 : currentIndex + 1;
      changeIndex(newIndex);
      fadeDiv();
    },
    onSwipedRight: () => {
      const newIndex = firstSlide ? resCharSlides.length - 1 : currentIndex - 1;
      changeIndex(newIndex);
      fadeDiv();
    },
    
  });

  const next = ()=>{
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    changeIndex(newIndex);
    }
  
  const back = ()=>{
    const newIndex = firstSlide ? resCharSlides.length - 1 : currentIndex - 1;
    changeIndex(newIndex);
    } 
  
  const fadeDiv= () =>{
    setFade(!fade);
    setTimeout(() => {
      setFade(false);}, 500);
  }

  let sectionClass = "resChar-section"
  sectionClass += fade ? "-fade" : "";

  
  
  

  return (

    
    
      <section {...handlers} className={sectionClass}>

        <ul className="dots">
          <li className="slideDot" onClick={()=> {fadeDiv(); changeIndex(0);} }>●</li>
          <li className="slideDot" onClick={()=> {fadeDiv(); changeIndex(1);} }>●</li>
          <li className="slideDot" onClick={()=> {fadeDiv(); changeIndex(2);} }>●</li>
          <li className="slideDot" onClick={()=> {fadeDiv(); changeIndex(3);} }>●</li>
        </ul>

          <div className="container resChar-container">
            <div className="resCharSlide">
              <div className="resChar-left">
                <p className="resChar-cap">{resCharSlides[currentIndex].caption}</p>
                <h1 className="resChar-title">{resCharSlides[currentIndex].title}</h1>
                <p className="resChar-text">
                  {resCharSlides[currentIndex].text}
                </p>

                <div className="buttonBox btnBox">
                  <button className="exploreBtn resChar-btn">SEE RESEVOIR CHARACTERIZATION</button>
                  <div className="btn-arrow1">
                    <div className="arrow">
                      <ArrowCircleRightIcon sx={{color:"white", fontSize:"1.3em"}}/>
                    </div>                   
                  </div>   
                </div>
              </div>
              
              
            </div>
          </div>
          

            <div className="resChar-right">
                <img src={resCharSlides[currentIndex].src}></img>
              </div>
        
        
      </section>
        
          
    
          
          
        

    
  )
}

export default ResCharSlide