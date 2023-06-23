// import "./ContainerBrands.css";

// function ContainerBrands() {
//   return (
//     <div className="brands-container">
//       <div className="brand1">
//         <a href="https://www.adidas.es/">
//           <img src="./src/images/brands/adidas.jpeg" alt="Imagen 1" />
//         </a>
//       </div>
//       <div className="brand2">
//         <a href="https://www.apple.com/">
//           <img src="./src/images/brands/apple.jpg" alt="Imagen 2" />
//         </a>
//       </div>
//       <div className="brand3">
//         <a href="https://www.guess.eu/">
//           <img src="./src/images/brands/guess.png" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand4">
//         <a href="https://www.lacoste.com/">
//           <img src="./src/images/brands/lacoste.jpg" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand5">
//         <a href="https://www.tiendalgonline.com/">
//           <img src="./src/images/brands/LG.jpg" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand6">
//         <a href="https://www.nike.com/">
//           <img src="./src/images/brands/nike.jpg" alt="Imagen 3" />
//         </a>
//       </div>

//       <div className="brand7">
//         <a href="https://eu.puma.com/">
//           <img src="./src/images/brands/puma.jpg" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand8">
//         <a href="https://www.samsung.com/">
//           <img src="./src/images/brands/samsung.png" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand9">
//         <a href="https://www.still.es/">
//           <img src="./src/images/brands/still.png" alt="Imagen 3" />
//         </a>
//       </div>
//       <div className="brand10">
//         <a href="https://www.bosch-professional.com/">
//           <img src="./src/images/brands/bosh.jpg" alt="Imagen 3" />
//         </a>
//       </div>
//       {/* <Link to="/#"> */}
//       <button className="moreBrands">more brands</button>
//       {/* </Link> */}
//     </div>
//   );
// }

// export default ContainerBrands;

import "./ContainerBrands.css";

function ContainerBrands() {
  return (
    <div>
      <div className="brands-container">
        <div className="row">
          <div className="box">
            <a href="https://www.adidas.com">
              <img src="./public/images/brands/adidas.jpeg" alt="Logo Adidas" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.apple.com">
              <img src="./public/images/brands/apple.jpg" alt="Logo Apple" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.bosh.com">
              <img src="./public/images/brands/bosh.jpg" alt="Logo Bosh" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.canon.com">
              <img src="./public/images/brands/canon.jpg" alt="Logo Canon" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <a href="https://www.guess.com">
              <img src="./public/images/brands/guess.png" alt="Logo Guess" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.lacoste.com">
              <img
                src="./public/images/brands/lacoste.jpg"
                alt="Logo Lacoste"
              />
            </a>
          </div>
          <div className="box">
            <a href="https://www.lg.com">
              <img src="./public/images/brands/LG.jpg" alt="Logo LG" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.nike.com">
              <img src="./public/images/brands/nike.jpg" alt="Logo Nike" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <a href="https://www.nikon.com">
              <img src="./public/images/brands/nikon.jpg" alt="Logo Nikon" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.puma.com">
              <img src="./public/images/brands/puma.jpg" alt="Logo Puma" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.samsung.com">
              <img
                src="./public/images/brands/samsung.png"
                alt="Logo Samsung"
              />
            </a>
          </div>
          <div className="box">
            <a href="https://www.still.com">
              <img src="./public/images/brands/still.png" alt="Logo Still" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <a href="https://www.adidas.com">
              <img src="./src/images/brands/adidas.jpeg" alt="Logo" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.adidas.com">
              <img src="./src/images/brands/adidas.jpeg" alt="Logo" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.adidas.com">
              <img src="./src/images/brands/adidas.jpeg" alt="Logo" />
            </a>
          </div>
          <div className="box">
            <a href="https://www.adidas.com">
              <img src="./src/images/brands/adidas.jpeg" alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerBrands;
