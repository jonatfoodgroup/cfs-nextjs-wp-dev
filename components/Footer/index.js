import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Footer.module.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      {/* footer primary */}

      <Container fluid className={styles.primaryFooter}>
        <Row>
          <Col>
            <Container>
              <Row>
                {/* logo column */}
                <Col
                  xs={{ span: 12, order: "last" }}
                  md={{ span: 4, order: "first" }}
                  lg={2}
                >
                  <div className={styles.footerLogo}>
                    <img
                      src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/CampbellsFoodservice_Logo_.svg"
                      alt="footer Logo"
                      class="img-fluid"
                    />
                  </div>
                </Col>
                {/* footer nav 1 column */}
                
                <Col xs={6} md={4} lg={2}>
                  <ul className={styles.footerLinkList}>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Our Commitment</a>
                    </li>
                    <li>
                      <a href="#">Find Your Segment</a>
                    </li>
                    <li>
                      <a href="#">Our Brands</a>
                    </li>
                  </ul>
                </Col>
                {/* footer nav 2 column */}
                <Col xs={6} md={4} lg={2}>
                  <ul className={styles.footerLinkList}>
                    <li>
                      <a href="#">Featured Products</a>
                    </li>
                    <li>
                      <a href="#">Recipes</a>
                    </li>
                    <li>
                      <a href="#">Trends & Insights</a>
                    </li>
                    <li>
                      <a href="#"> Programs & Promotions</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} lg={2}>
                  <div className={styles.footerLink + " text-center"}>
                  <a href="javascript://" onClick={() => {}}>
                    <img
                      src="https://www.campbellsfoodservice.com/wp-content/uploads/2021/10/Campbells_Culinary_Innovation_Logo-with_Trendpulse_2_Color_White.png"
                      alt="footer Logo"
                      class="img-fluid"
                    />
                    Campbell's Culinary Innovation</a>
                  </div>
                </Col>
                <Col xs={12} lg={3}>
                  <div className={styles.needHelpBlock}>
                    <h4 style={{fontWeight: 700, color: '#1a1a1a'}}>Need help with something?</h4>

                    <div className={styles.telephoneBlock}>
                      <div>
                        <Icon
                          icon="gridicons:phone"
                          width="42"
                          className={styles.telephoneIcon}
                        />
                      </div>
                      <div className={styles.telephoneNum}>
                        <a href="tel:+18008797687">800.879.7687</a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialBlock}>
                    <p style={{marginBottom: '0'}}>
                      <strong>Stay connected with Campbell’s</strong>
                    </p>
                  </div>

                  <Container fluid className={styles.redIcon}>
                    <a href="#">
                      <Icon
                        icon="entypo-social:facebook-with-circle"
                        width="42"
                      />
                    </a>

                    <a href="#">
                      <Icon
                        icon="entypo-social:youtube-with-circle"
                        width="42"
                      />
                    </a>
                    <a href="#">
                      <Icon
                        icon="entypo-social:linkedin-with-circle"
                        width="42"
                      />
                    </a>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.legalFooter}>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col
                  xs={{ span: 12, order: "last" }}
                  md={{ span: 3, order: "first" }}
                >
                  <div className={styles.copyRightBlock}>
                    ©{new Date().getFullYear()} Campbell’s Soup Company. <br />
                    All rights reserved.
                  </div>
                </Col>
                <Col xs={12} md={{ span: 9 }}>
                  {/*replace with wp menu */}
                  <ul className={styles.legalMenu}>
                    <li>
                      <a
                        href="https://www.campbellsoupcompany.com/about-us/faqs/#Allergens"
                        target="_blank"
                      >
                        Allergen Labeling{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.campbellsoupcompany.com/privacy-policy/"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.campbellsoupcompany.com/privacy-policy/#advertising"
                        target="_blank"
                      >
                        Interest Based Ads
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.campbellsoupcompany.com/terms-of-use/"
                        target="_blank"
                      >
                        Legal Notices{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Do Not Sell My Personal Information
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
