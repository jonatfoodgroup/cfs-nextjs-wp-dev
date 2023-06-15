import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import client from "../..//app/apollo-client";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Masthead from "@/components/Masthead";
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

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
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
      setProducts(data.products.nodes);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>Product Table</h1>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.excerpt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
