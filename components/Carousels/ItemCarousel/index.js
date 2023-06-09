import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import CampbellsCard from "@/components/CampbellsCard";

const ItemCarousel = ({ items, settings }) => {
  
  return (
    <Container>
      <Row>
        <Col>
          <Slider {...settings}>
            {items.map((item, index) => (
              <CampbellsCard key={index} item={item} />
              
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCarousel;
