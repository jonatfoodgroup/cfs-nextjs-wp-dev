import { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";
import styles from "./BrandFeatures.module.css";

const BrandFeatures = ({ brandAttribute, brandImage, altText, attributeFootnote }) => {
  console.log(attributeFootnote);
  return (
    <>
      <Container className={styles.keyAttribute}>
        <Row className={"m-4 d-flex align-items-center justify-content-center"}>
          <Col
            md={{ span: 4 }}
            className={"mt-2"}
            data-speed="-.2"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="750"
          >
          <p dangerouslySetInnerHTML={{ __html: brandAttribute }}></p>
          </Col>

          <Col md={4} lg={5} className="mb-5 mt-5">
             <img  
           src={brandImage} 
            data-speed="-.2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="750"
            className="img-fluid"
             alt={altText}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BrandFeatures;
