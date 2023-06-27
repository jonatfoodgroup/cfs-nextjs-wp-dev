// V1.0.0
import Posts from "@/components/Posts";
import Pages from "@/components/Pages";
import Categories from "@/components/Categories";
import Tags from "@/components/Topics";
import Brands from "@/components/Sitemap/Brands";
import Segments from "@/components/Sitemap/Segments";

// Planned 1.0.1
// onBranch: sitemap
// import Products from "@/components/Products";
// import Segments from "@/components/Segments";
// import Inspiration from "@/components/Inspiration";
// import Trending from "@/components/Trending";

// Utilities
import { Container, Row, Col } from "react-bootstrap";
// import styles from "./Sitemap.module.css";

const Sitemap = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Posts</h3>
            <Posts />
            <h3>Pages</h3>
            <Pages />
            <h3>Categories</h3>
            <Categories />
            <h3>Tags</h3>
            <Tags />
            <h3>Brands</h3>
            <Brands />
            <h3>Segments</h3>
            <Segments />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sitemap;
