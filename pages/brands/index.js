import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import client from "@/app/apollo-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import PageMeta from "@/components/PageMeta";
import Slider from "react-slick";
const BrandsArchive = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  return (
    <>
      <PageMeta title="Brands" description="Campbell's Foodservice Brands" />
      <Container>
        <Row className={"align-middle"}>
          <Col md={{ span: 6 }} className={"mt-5"} style={{padding: "40px"}}>
            <h2>
              We’ve been in the flavor game for over 150 years, and it shows.
            </h2>
            <p>
              Partner with Campbell’s Foodservice and you get a powerful
              portfolio of deliciousness. Iconic brands that help inspire
              innovative ideas. A one-stop shop for craveable eats, treats,
              soups, snacks and sips.
            </p>
          </Col>
          <Col md={{ span: 6 }} className={"mt-3"}>
            <img
              src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/brands-archive-featured.jpg"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <Col>
            <h4 className="centered red" style={{marginBottom: "20px !important"}}>Meet the Family</h4>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Row style={{marginTop: "50px !important"}}>
                <BrandCarousel brands={data?.brands?.nodes} />
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BrandsArchive;

// React slick carousel of brands with 6 per slide
const BrandCarousel = ({ brands }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <Slider {...settings}>
      {brands.map((brand) => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </Slider>
  );
};

const Brand = ({ brand }) => {
  const [logoUrl, setLogoUrl] = useState(brand.brandFields.brandLogo);

  useEffect(() => {
    if (brand.brandFields.brandLogo) {
      setLogoUrl(brand.brandFields.brandLogo.sourceUrl);
    }
  }, [brand]);
  return (
    <Col>
      <img src={logoUrl} className="img-fluid" alt="{brand.title}" />
    </Col>
  );
};
