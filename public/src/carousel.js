import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';





function HomepageCarousel() {
    return (
      <Carousel data-bs-theme="dark">
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./fire 2.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./fire 3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./fire 4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
  
  export default HomepageCarousel;