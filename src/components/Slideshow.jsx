import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./slideShow.css";
import { useState } from "react"




const Slideshow = ({slides, isMobileScreen}) => {
  
  const [currentIndex, changeIndex] = useState(0);
  const firstSlide = currentIndex === 0;
  const lastSlide = currentIndex === slides.length - 1

  let color = slides[currentIndex].color;
  
  

  
  if(isMobileScreen){
    var timeout = setTimeout(()=> next(),5000);
  }
  
  
  


  const next = ()=>{
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    changeIndex(newIndex);
    }
  
  const back = ()=>{
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    changeIndex(newIndex);
    } 
 
 


  return (
    <>
      <section className="slideSection">

        <div id='1' className="slide">
          <div className='slidePic' style={{backgroundImage:`url(${slides[currentIndex].src})` }}></div>
          <div className="caption" >
            <h1 className="cap-title">{slides[currentIndex].caption}</h1>
            <p className='cap-text'>{slides[currentIndex].text}</p>
          </div>
        </div>



        


        <button onClick={()=> next()} id="slideBtn"  className="slideArrows forward">
          <ArrowForwardIosIcon/>
        </button>
        <button onClick={()=> back()} id="slideBtn"  className="slideArrows back">
          <ArrowBackIosNewIcon/>
        </button>
        
      </section>
    </>
  )
}

export default Slideshow