import "./ContainerBrands.css"


function ContainerBrands() {
    return(
        <div className="brands-container">
            <div className="brand1">
              <a href="https://www.adidas.es/">
                <img src="./src/images/brands/adidas.jpeg" alt="Imagen 1" />
              </a>
            </div>
            <div className="brand2">
              <a href="https://www.apple.com/">
                <img src="./src/images/brands/apple.jpg" alt="Imagen 2" />
              </a>
            </div>
            <div className="brand3">
              <a href="https://www.guess.eu/">
                <img src="./src/images/brands/guess.png" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand4">
              <a href="https://www.lacoste.com/">
                <img src="./src/images/brands/lacoste.jpg" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand5">
              <a href="https://www.tiendalgonline.com/">
                <img src="./src/images/brands/LG.jpg" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand6">
              <a href="https://www.nike.com/">
                <img src="./src/images/brands/nike.jpg" alt="Imagen 3" />
              </a>
            </div>
            
            <div className="brand7">
              <a href="https://eu.puma.com/">
                <img src="./src/images/brands/puma.jpg" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand8">
              <a href="https://www.samsung.com/">
                <img src="./src/images/brands/samsung.png" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand9">
              <a href="https://www.still.es/">
                <img src="./src/images/brands/still.png" alt="Imagen 3" />
              </a>
            </div>
            <div className="brand10">
              <a href="https://www.bosch-professional.com/">
                <img src="./src/images/brands/bosh.jpg" alt="Imagen 3" />
              </a>
            </div>
            {/* <Link to="/#"> */}
            <button className="moreBrands">more brands</button>
            {/* </Link> */}
            
          </div>
    );
}

export default ContainerBrands;