import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import "./upbtn.css"

const UpBtn = () => {
  return (
    <a className='upArrowLink' href='#'>
      <ArrowCircleUpIcon sx={{fontSize:"4em", position:"fixed",
       bottom:"1rem", right: "1rem", zIndex:9999, opacity:"0.5", "&:hover":{opacity:"1"}}}/>
    </a>
  )
}

export default UpBtn