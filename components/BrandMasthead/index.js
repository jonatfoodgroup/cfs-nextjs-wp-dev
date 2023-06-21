import { useEffect, useState } from "react";
import { Button, Modal, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRAND";


import styles from "./BrandMasthead.module.css";


const BrandMasthead = () => {
    return (

<>       

<Container fluid className={styles.brandMasthead}>
                <Row>
                    <Col >
                    {/*brand image left */}
                        <img data-aos="fade-up-right" data-aos-duration="750" data-aos-once="true"     data-aos-delay="750" src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/goldfish-header-left.png" className={styles.brandImageLeft} />
                    </Col>

                    <Col xs={10} sm={12} md={6} lg={6} className={styles.brandMastheadIntro} data-aos="fade-up" data-aos-duration="750" data-aos-once="true"     data-aos-delay="750">
                        {/*brand logo */}
                        <img src="https://via.placeholder.com/150" alt="Goldfish" class="img-fluid" />
                        {/*brand headline */}
                        <h2 class="centered head-underline ">The Snack That Smiles Back®</h2>
                        <p>  WP CONTENT At Campbell’s Foodservice, we’re committed to serving foods everyone can trust, like our fan-favorite Goldfish® products. They’re fun, baked with goodness, and they’ve been making everyone, including operators, smile for decades. Create more memorable moments with Goldfish® crackers.</p>
                    </Col>

                    <Col>
                       {/*brand image right */}
                        <img data-aos="fade-up-left" data-aos-duration="750" data-aos-once="true"     data-aos-delay="750" src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/goldfish-header-right-1.png" className={styles.brandImageRight} />
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default BrandMasthead;

