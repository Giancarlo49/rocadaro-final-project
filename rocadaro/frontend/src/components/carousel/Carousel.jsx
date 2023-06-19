import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Elektro/Elektro1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Laptop,Handy & Kamera Zubehör </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Garten/gartenkanne1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Garten Zubehör</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Schuhe/schuhe2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Schuhe</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Haushaltswaren/hw2.jpg"
          alt="Four slide"
        />
        <Carousel.Caption>
          <h5>Haushaltswaren</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
