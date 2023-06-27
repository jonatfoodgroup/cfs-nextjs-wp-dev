import { useState, useEffect } from "react";
import Masthead from "@/components/Masthead";
import ProductTable from "@/components/Table";

const url = "https://services.campbells.com/us/products/product";
// Components
const ProductsPage = ({
  products,
}) => {
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <Masthead />
      <ProductTable />
    </>
  ); 
};

// Get static props by fetching data from the API
export async function getStaticProps() {
  const response = await fetch(url);
  const products = await response.text();
  
  return {
    props: {
      products: products
    },
  }
}


export default ProductsPage;
