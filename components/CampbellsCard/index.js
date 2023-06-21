import { useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function CampbellsCard({
  item,
  key,
  onClick
}) {
  useEffect(() => {
    console.log("CampbellsCard item", item);
  }, [item]);

  if (!item) {
    return null;
  }
  return (
    <Card
      key={key}
      className="shadow-sm"
      style={{ width: "24rem" }}
      onClick={onClick}
    >
      <Link href={`/segments/${item.slug}`}>
        <Card.Img variant="top" src={item.featuredImage.node.guid} />
      </Link>
      <Card.Body>
       
          <Card.Title>
          <Link href={`/segments/${item.slug}`}>   {item.title}   </Link>
          </Card.Title>
       
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: (item.excerpt) }}></div>
        </Card.Text>
      </Card.Body>

    </Card>
  );
}