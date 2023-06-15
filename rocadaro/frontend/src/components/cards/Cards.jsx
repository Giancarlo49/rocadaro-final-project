import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const cardsData = [
  {
    title: 'Haushaltsware',
    text: 'Hier kann man finden die besten Haushaltsware',
    image: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg',
  },
  {
    title: 'Elektro',
    text: 'Contenido de la tarjeta 2',
    image: 'https://example.com/image2.jpg',
  },
  {
    title: 'Garten',
    text: 'Contenido de la tarjeta 3',
    image: 'https://example.com/image3.jpg',
  },
  {
    title: 'Mode',
    text: 'Contenido de la tarjeta 3',
    image: 'https://example.com/image3.jpg',
  },
];

function GroupExample() {
  return (
    <CardGroup>
      {cardsData.map((card, index) => (

      <Card key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Card>


      ))}

    </CardGroup>
  );
}

export default GroupExample;