import "./Cards.css";
// import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Garden from "./imagesCard/daniel-watson-8vBpYpTGo90-unsplash.jpg";
import Haushaltsware from "./imagesCard/scott-umstattd-wxruheY5nG8-unsplash.jpg";
import Elektro from "./imagesCard/Elektro.jpg";
import Mode from "./imagesCard/CardMode.jpg";
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    title: "Haushaltsware",
    
    image: Haushaltsware,
  },
  {
    title: "Elektro",
    
    image: Elektro,
  },
  {
    title: "Garten",
    
    image: Garden,
  },
  {
    title: "Mode",
    
    image: Mode,
  },
];

function GroupExample() {

  const navigate = useNavigate();

  const handleButtonClick = (title) => {
    if (title === "Elektro") {
      navigate('/elektro'); // Navigiere zur Elektro-Seite
    } else if (title === "Haushaltsware") {
      navigate('/haushaltsware'); // Navigiere zur Haushaltswaren-Seite
    } else if (title === "Garten") {
      navigate('/garten'); // Navigiere zur Gartenschau-Seite
    } else if (title === "Mode") {
      navigate('/mode'); // Navigiere zur Moden-Seite
    }
  };


  return (
    <CardGroup>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <Card.Img className="cardImage" variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            {/* <Link to="/#"> */}
            <button onClick={()=>{handleButtonClick(card.title)}} className="buttonGo">GO!!</button>
            {/* </Link> */}
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}

export default GroupExample;
