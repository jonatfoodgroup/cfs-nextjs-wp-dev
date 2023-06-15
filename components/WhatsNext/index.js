import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./whatsnext.module.css";



// component for heading underline:
export function SectionUnderline() {
    return (
      <hr
      className={styles.sectionUnderline} />
    );
  }
// make a component that inlcudes an image, copy and a link
  export function WhatsNextBlock({link, icon, alttext, sectionCopy, linkCopy}) {
  
    return (
      <>
        <a href={(link)}
        className={styles.whatsNextBlockLink}>
          <div
            className={styles.whatsNextBlock}>
            <img
              className={styles.whatsNextIcon}
              src={(icon)}
              alt={(alttext)}
            />
            <p>{(sectionCopy)} <br/ >{(linkCopy)}</p>
          </div></a>
      </>
    );
  }
  
  const WhatsNext = () => {
    return (
 
      <Container>
        <Row>
          <h2>What’s next?</h2>
          <SectionUnderline />
        </Row>
  
        <Row>
          <Col md>
            <WhatsNextBlock
              link={'https://google.com'}
              icon={'https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-cart.png'}
              alttext={'some alt text'}
              sectionCopy={'Browse products from our catalog'}
              linkCopy={'View Products'}
            />
  
          </Col>
  
          <Col md>
            <WhatsNextBlock
              link={'https://google.com'}
              icon={'https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-bubble.png'}
              alttext={'some alt text'}
              sectionCopy={'Speak with a Campbell’s sales represntative.'}
              linkCopy={'Contact Us'}
            />
          </Col>
          <Col md>
            <WhatsNextBlock
              link={'https://google.com'}
              icon={'https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/icon-bulb.png'}
              alttext={'some alt text'}
              sectionCopy={'View the latest trends and insights for your business.'}
              linkCopy={'Get Inspired'}
            />
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default WhatsNext;
