import { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";
import styles from "./BrandFeatures.module.css";

function BrandFeatureBlock() {
  return (
      <>
   <Container className={styles.keyAttribute} >
      <Row className={"m-3 d-flex align-items-center justify-content-center"}>
        <Col 
        md={{ span: 4, offset: 2 }}
        className={"mt-2"}
        data-speed="-.2"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="750"
            >
        <p>key attribute here<br/>
        Top marks: Cape Cod® Kettle Cooked Potato Chips are the #1 kettle chip in the U.S.*</p>

          </Col>

          <Col md={6}>
            <img  
            src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/Kette_FAM_small.png" className="img-fluid brandFeaturedImage" 
            data-speed="-.2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="750"
            alt="the featured image here"  />
          </Col>
      </Row>
    </Container>
    </>
  );
}

export default function BrandFeature() {
  return (
    <BrandFeatureBlock />
  );
}

