import { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";

import styles from "./BrandMasthead.module.css";

const BrandMasthead = ({ slug }) => {
  const [isSSR, setIsSSR] = useState(true);
  const { loading, error, data } = useQuery(GET_BRAND, {
    client: client,
    variables: { slug: slug || "campbells" },
  });

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  if (loading) return null;
  if (error) return null;
  if (isSSR) return null;
  if (data) {
    return (
      <>
        <Container fluid className={styles.brandMasthead}>
          <Row>
            <Col>
              <img
                data-aos="fade-up-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="750"
                src={data.brand.brandFields.brandleftimage.sourceUrl}
                className={styles.brandImageLeft}
              />
            </Col>

            <Col
              xs={10}
              sm={12}
              md={6}
              lg={6}
              className={styles.brandMastheadIntro}
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="750"
            >
              <img
                src={data.brand.brandFields.brandLogo.sourceUrl}
                alt="Goldfish"
                class="img-fluid"
              />
              <h2 class="centered head-underline">
                {data.brand.brandFields.brandIntroHeadline}
              </h2>
          
              <div dangerouslySetInnerHTML={{ __html: (data.brand.content) }}></div>
            
            </Col>

            <Col>
              <img
                data-aos="fade-up-left"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="750"
                src={data.brand.brandFields.brandrightimage.sourceUrl}
                className={styles.brandImageRight}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default BrandMasthead;
