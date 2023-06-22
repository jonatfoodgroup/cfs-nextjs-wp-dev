import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
const BrandsArchive = () => {
  return (
<Container>
{/*This is static content to be replaced by /brands.*/}

  <Row>
  <Col md={{ span: 6 }} className={"mt-5"}><h2>We’ve been in the flavor game for over 150 years, and it shows.</h2>
<p> Partner with Campbell’s Foodservice and you get a powerful portfolio of deliciousness. Iconic brands that help inspire innovative ideas. A one-stop shop for craveable eats, treats, soups, snacks and sips.</p>
      </Col>
      <Col md={{ span: 6 }} className={"mt-3"}>
      <img
      src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/brands-archive-featured.jpg"
      className="img-fluid"
     
    />
    </Col>
    </Row>
</Container>


  );
};
export default BrandsArchive;

{/* bring in the brands carousel */}
const Brand = ({ brand }) => {
  const [logoUrl, setLogoUrl] = useState(brand.brandFields.brandLogo);
  
  useEffect(() => {
    if (brand.brandFields.brandLogo) {
      setLogoUrl(brand.brandFields.brandLogo.sourceUrl);
    }
  }, [brand]);
  return (
    <Col className={styles.w20}>
      {/* <a href={`/brands/${brand.slug}`}>{brand.title}</a> */}
      <a href="#" data-toggle="modal">

        {/*<img src={brand.featuredImage.node.guid} className="img-fluid" />*/}

        <img src={logoUrl} className="img-fluid" alt="{brand.title}" />

      </a>
    </Col>
  );
};