import './Cards.css';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Garden from './imagesCard/daniel-watson-8vBpYpTGo90-unsplash.jpg';
import Haushaltsware from './imagesCard/scott-umstattd-wxruheY5nG8-unsplash.jpg';
import Elektro from './imagesCard/Elektro.jpg';
import Mode from './imagesCard/CardMode.jpg'


const cardsData = [
  {
    title: 'Haushaltsware',
    // text: 'Hier kann man finden die besten Haushaltsware',
    image: Haushaltsware,
  },
  {
    title: 'Elektro',
    // text: 'Contenido de la tarjeta 2',
    image: Elektro,
  },
  {
    title: 'Garten',
    // text: 'Contenido de la tarjeta 3',
    image: Garden,
  },
  {
    title: 'Mode',
    // text: 'Contenido de la tarjeta 3',
    image: Mode,
  },
];

function GroupExample() {
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
        <button>GO!!</button>
      {/* </Link> */}
      </Card.Footer>
      </Card>


      ))}

    </CardGroup>
  );
}

export default GroupExample;