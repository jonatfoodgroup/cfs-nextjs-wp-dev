import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect } from "react";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";
import Section from "@/components/Section";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import PageMeta from "@/components/PageMeta";
import HomeRecipes from "@/components/HomeRecipes";
import Slider from "react-slick";
import ProductTable from "@/components/Table";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";

import BrandMasthead from "@/components/BrandMasthead";
import  BrandFeatures from "@/components/BrandFeatures";

import BrandPromo from "@/components/BrandPromotionBanner";
import ItemCarousel from "@/components/Carousels/ItemCarousel";

export async function getStaticProps({ params }) {
  const { data, loading, error } = await client.query({
    query: GET_BRAND,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      brand: data.brand,
    },
  };
}

// getStaticPaths
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Brand {
        brands(first: 100) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: data.brands.nodes.map((brand) => `/brands/${brand.slug}`) || [],
    fallback: false,
  };
}

const items = [
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
  },
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
  },
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
  },
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
  },
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
  }
]

export default function Brand({ brand }) {
  if (!brand) return null;
  return (
    <>
      <PageMeta title={brand.title} description={brand.description} />
      <BrandMasthead slug={brand.slug} />
      <BrandPromo />
      {/* <BrandFeatures
      
      brandAttribute={brand.brandFields.keyAttribute} 
      /> */}
      <Section title={"Get Inspired"} backgroundColor={"#F7F5F2"}>
        <HomeRecipes />
      </Section>
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="featured" id="uncontrolled-tab-example">
              <Tab eventKey="featured" title="Featured Products"> 
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  arrows={true}
                  slidesToShow={4}
                  slidesToScroll={4}
                  >
                  {
                    items.map((item, index) => {
                      return (
                        <div key={index} style={{padding: '20px', border: '1px solid #ccc'}}>
                          <img src={item.featuredImage} style={{maxWidth: "200px", margin: '20px auto'}} />
                          <h4 style={{fontSize: '.8rem', fontWeight: '400'}}>{item.title}</h4>
                        </div>
                      )
                    })
                  }
                </Slider>
              </Tab>
              <Tab eventKey="resources" title="Resources">
                <ItemCarousel />
              </Tab>
              <Tab eventKey="inspiration" title="Inspiration">
                <ItemCarousel />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      <Section title={"Product Catalog"} backgroundColor={"#f1f1f1"}>
        
      </Section>
    </>
  );
}