import { useState, useEffect } from "react";
import Masthead from "@/components/Masthead";
import ProductTable from "@/components/Table";
import products  from "@/app/data/products.json";

const ProductsPage = ({
  products,
}) => {

  const [localProducts, setLocalProducts] = useState([]);
  useEffect(() => {
    products.map((product, index) => {
      let productObj = {}

      let imageId = product.PrimaryImage.split('/')[6];
      productObj['featuredImage'] = imageId
      productObj['title'] = product.Name;
      productObj['description'] = product.Description;
      productObj['upc'] = product.UPC;

      setLocalProducts(localProducts => [...localProducts, productObj]);
    });
  }, [products]);
  return (
    <>
      <Masthead />
      <ProductTable items={localProducts} />
    </>
  ); 
};

// Get static props by fetching data from the API
export async function getStaticProps() {

  return {
    props: {
      products: products.Result
    },
  }
}


export default ProductsPage;
