import { useState, useEffect, use } from "react";
import { gql } from "@apollo/client";
import client from "../..//app/apollo-client";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Masthead from "@/components/Masthead";
import ProductTable from "@/components/Table";
// Components
const ProductsPage = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-in-out-quart',
    });

  }, []);

  return (
    <>
      <Header />
      <Masthead />
      <ProductTable />
    </>
  ); 
};

// Get data from WP
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        products {
          nodes {
            id
            title
            slug
            excerpt
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.nodes,
    },
  };
}

export default ProductsPage;
