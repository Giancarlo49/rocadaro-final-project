import "./Karten.scss";

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from "../../data";



const Karten = () => {
  const [newData, setNewData] = useState(data)
  console.log(newData)



 
  const navigate = useNavigate();


  return (
    <div id="container">
      {newData.categorys.map((card, index) => (
      <Link to={`/category/${card.category}`}>
        <div className="item" key={index}>
          <div className="content">
            <h2>{card.title}</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Sieb.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Messer3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/hw2.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Kaffemühle4.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Gewürzregal.jpg" />
            </div>
          </div>
        </div>
      </Link>
      ))}
    </div>
      
    
  );
};

export default Karten;



