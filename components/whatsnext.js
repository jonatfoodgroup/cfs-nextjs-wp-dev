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
  
  
  export function WhatsNext() {
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
              icon={'https://placehold.co/80x80'}
              alttext={'some alt text'}
              sectionCopy={'Browse products from our catalog'}
              linkCopy={'View Products'}
            />
  
          </Col>
  
          <Col md>
            <WhatsNextBlock
              link={'https://google.com'}
              icon={'https://placehold.co/80x80'}
              alttext={'some alt text'}
              sectionCopy={'Speak with a Campbell’s sales rep.'}
              linkCopy={'Contact Us'}
            />
          </Col>
          <Col md>
            <WhatsNextBlock
              link={'https://google.com'}
              icon={'https://placehold.co/80x80'}
              alttext={'some alt text'}
              sectionCopy={'View the latest trends and insights for your biz.'}
              linkCopy={'Get Inspired'}
            />
          </Col>
        </Row>
      </Container>
    );
  }
  
  
