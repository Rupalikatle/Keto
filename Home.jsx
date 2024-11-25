import React from 'react' 
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './Home.css'
import BackgroundImage from '../Components/Images/BackgroundImage.jpg'
import background2 from '../Components/Images/background2.jpeg'
import background3 from '../Components/Images/background3.jpeg'


const Home = () => {

  return (
    <MDBCarousel showControls>
    <MDBCarouselItem itemId={1} >
      <img  src={BackgroundImage} className='d-block  w-100'  alt='...' />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={2}  >
      <img src={ background2} className='d-block w-100' alt='...' />
    </MDBCarouselItem>
    <MDBCarouselItem itemId={3}  >
      <img src={background3} className='d-block w-100' alt='...' />
    </MDBCarouselItem>
  </MDBCarousel>
  )
}

export default Home