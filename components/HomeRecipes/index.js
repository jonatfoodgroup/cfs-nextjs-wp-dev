import { useState, useEffect } from "react";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import styles from "./homerecipes.module.css";

export function HomeRecipeBlock({
  link,
  icon,
  alttext,
  sectionCopy,
  linkCopy,
}) {
  return (
    <>
      <a href={link} className={styles.whatsNextBlockLink}>
        <div className={styles.whatsNextBlock}>
          <img className={styles.whatsNextIcon} src={icon} alt={alttext} />
          <p>
            {sectionCopy} <br />
            {linkCopy}
          </p>
        </div>
      </a>
    </>
  );
}

const HomeRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  fetch("https://services.campbells.com/recipes/recipe").then((response) => {
    response.text().then((text) => {
      const data = JSON.parse(text);
      setRecipes(data.Result);
      setTotalCount(data.TotalResults);
    });
  });
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div className="RecipeCatLinks centered"></div>
          </Col>
        </Row>
      </Container>

      <Container data-aos="fade-up" data-aos-duration="750">
        <Row className="justify-content-md-center">
          <Col md={5}>
            <img
              src="https://www.campbellsfoodservice.com/wp-content/uploads/assets/large/autumn-harvest-salad.jpg"
              className="img-fluid"
            />
              <p style={{marginTop: 10, fontWeight: 700}}>Autmn Harvest Salad Made with Campbell's Signature Harvest Butternut Squash</p>
              <p style={{fontSize: '.8rem'}}>This autumn harvest salad features butternut squash, dried cherries, candied walnuts, goat cheese, pomegranate seeds and salad greens tossed with a sweet vinaigrette made with Campbell’s® Signature Harvest Butternut Squash soup</p>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={6}>
                <img
                  src="https://www.campbellsfoodservice.com/wp-content/uploads/assets/large/Tomato-Soup_Plant_Creamy-Tomato-Basil.jpg"
                  className="img-fluid"
                />

                {/* Rewritten in proper casing */}
                <p style={{fontSize: '.8rem', marginTop: 8, fontWeight: 700}}>“Creamy” Tomato Basil Soup Made with Campbell’s® Condensed Tomato Soup</p>
              </Col>

              <Col md={6}>
                <img
                  src="https://www.campbellsfoodservice.com/wp-content/uploads/2019/01/sauted-onion-signature-sauteed-onion-mushroom-bisque.jpg"
                  className="img-fluid"
                />
                <p style={{fontSize: '.8rem', marginTop: 8, fontWeight: 700}}>Sauteed Onion & Mushroom Gravy Made with Campbell’s® Signature Sauteed Onion & Mushroom Bisque</p>
              </Col>
              <Col md={6}>
                <img
                  src="https://www.campbellsfoodservice.com/wp-content/uploads/assets/large/FoodServiceCreamyTomatoVodkaSauce.jpg"
                  className="img-fluid"
                />
                <p style={{fontSize: '.8rem', marginTop: 8, fontWeight: 700}}>Pasta with Creamy Tomato Vodka Sauce Made</p>
              </Col>

              <Col md={6}>
                <img
                  src="https://www.campbellsfoodservice.com/wp-content/uploads/assets/large/FoodService_Pace_JerkRubChickenWithWatermelonSalsa.jpg"
                  className="img-fluid"
                />
                <p style={{fontSize: '.8rem', marginTop: 8, fontWeight: 700}}>Jerk Chick With Watermelon Salsa</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeRecipes;
