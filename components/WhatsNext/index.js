import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./whatsnext.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

// make a component that inlcudes an image, copy and a link
export function WhatsNextBlock({ link, icon, alttext, sectionCopy, linkCopy }) {
  const [cta, setCta] = useState(null);

  useEffect(() => {
    if (linkCopy) {
      setCta(linkCopy);
    }
  }, [linkCopy]);
  return (
    <>
      <Link href={link} className={styles.whatsNextBlockLink}>
        <div className={styles.whatsNextBlock}>
          <img className={styles.whatsNextIcon} src={icon} alt={alttext} />
          <p>
            {sectionCopy} <br />
            <span  className={styles.linkRed}>{cta}</span>   
          </p>        
          
        </div>        
      </Link>
    </>
  );
}

const WhatsNext = () => {
  return (
    <Container className={styles.whatsNextBlockWrap}>
      <Row>
        <Col>
          <h4 class="centered head-underline red">What's Next</h4>
        </Col>
      </Row>
      <Row>
        <Col md>
          <WhatsNextBlock
            link={"https://google.com"}
            icon={
              "https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-cart.png"
            }
            alttext={"some alt text"}
            sectionCopy={"Browse products from our catalog."}
            linkCopy={"View Products"}
          />
        </Col>

        <Col md>
          <WhatsNextBlock
            link={"https://google.com"}
            icon={
              "https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-bubble.png"
            }
            alttext={"some alt text"}
            sectionCopy={"Speak with a Campbell’s sales represntative."}
            linkCopy={"Contact Us"}
          />
        </Col>

        <Col md>
          <WhatsNextBlock
            link={"https://google.com"}
            icon={
              "https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-bulb.png"
            }
            alttext={"some alt text"}
            sectionCopy={"View the latest busines trends and insights."}
            linkCopy={"Get Inspired"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsNext;
