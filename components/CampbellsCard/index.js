import { useState} from 'react';
import { Card } from 'react-bootstrap';

export default function CampbellsCard({
  item,
  key,
  onClick
}) {
  if (!item) {
    return null;
  }
  return (
    <Card
      key={key}
      className="shadow-sm"
      style={{ width: "18rem" }}
      onClick={onClick}
      >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}