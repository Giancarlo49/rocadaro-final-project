import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="../src/images/Logo/LogoHeader.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5 className="bg-dark text-white p-3 caro-titel rounded ">
            Laptop,Handy & Kamera Zubehör{" "}
          </h5> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Garten/gartenkanne1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-3 caro-titel rounded ">
            Garten Zubehör
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Elektro/Elektro1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-3 caro-titel rounded ">
          Laptop,Handy & Kamera Zubehör
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Schuhe/Schuhe2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-3 caro-titel rounded ">Schuhe</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/images/Haushaltswaren/hw2.jpg"
          alt="Four slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-3 caro-titel rounded ">
            Haushaltswaren
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
