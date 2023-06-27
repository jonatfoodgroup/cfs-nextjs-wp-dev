import { useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function CampbellsCard({
  item,
  key,
  onClick,
  delay = 0,
}) {

  if (!item) {
    return null;
  }
  return (
    <Card
      key={key}
      className="shadow-sm"
      style={{ margin: "1em" }}
      onClick={onClick}
      data-aos="fade-in"
      data-aos-duration="750"
      data-aos-delay={delay}
    >
      <Link href={`/segments/${item.slug}`}>
        {
          item.featuredImage.node &&
          <Card.Img variant="top" src={item.featuredImage.node.guid} />
        }
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