import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../pages/CategoryPage.css";

const LikeButton = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    
    setIsClicked(!isClicked);
  };
  

  return (
    <div  onClick={handleClick} className={ `like-button ${isClicked && 'liked'}` }>
        <i className="bi bi-heart-fill"></i>
        </div >
  )
}

export default LikeButton;