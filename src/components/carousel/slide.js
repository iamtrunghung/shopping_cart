import Carousel from 'react-bootstrap/Carousel';
 import 'bootstrap/dist/css/bootstrap.min.css';
function Silder() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://mcdonalds.vn/uploads/2018/banner-slider/pho2022bw_homeslide-min.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://mcdonalds.vn/uploads/2018/banner-slider/mixedrice_homeslide.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mcdonalds.vn/uploads/2018/banner-slider/summer2022_homeslide.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mcdonalds.vn/uploads/2018/banner-slider/shakedsalad_homeslide.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Silder;