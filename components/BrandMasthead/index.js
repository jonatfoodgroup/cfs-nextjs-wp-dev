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
    if (window) {
      // On scroll, translate the Y position of the images with a ratio for parallax effect
      const parallax = () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll(".parallax");
        parallax.forEach((element) => {
          let speed = element.getAttribute("data-speed");
          element.style.transform = `translateY(${scrolled * speed}px)`;
          // Ensure this is instant versus a smooth translate
          element.style.transition = "transform 0s";
        });
      };

      window.addEventListener("scroll", parallax);

    }
  }, []);

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
                data-speed="-.2"
                data-aos="fade-up-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="750"
                src={data.brand.brandFields.brandleftimage.sourceUrl}
                className={styles.brandImageLeft + " parallax"}
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
              <div className={styles.brandMastheadIntroOverlay}>
              <img
                src={data.brand.brandFields.brandLogo.sourceUrl}
                alt="Goldfish"
                class="img-fluid"
              />
              <h2 class="centered head-underline">
                {data.brand.brandFields.brandIntroHeadline}
              </h2>

              <div
                dangerouslySetInnerHTML={{ __html: data.brand.content }}
              ></div>
              </div>
            </Col>

            <Col>
              <img
                data-speed=".2"
                data-aos="fade-up-left"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="750"
                src={data.brand.brandFields.brandrightimage.sourceUrl}
                className={styles.brandImageRight + " parallax"}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default BrandMasthead;
