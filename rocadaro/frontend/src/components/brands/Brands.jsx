import React from "react";
import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>BRANDS</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;