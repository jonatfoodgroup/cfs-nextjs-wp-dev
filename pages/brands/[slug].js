import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect } from "react";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";

// Global modules
import BrandMasthead from "@/components/BrandMasthead";
import BrandPromo from "@/components/BrandPromotionBanner";
import ItemCarousel from "@/components/Carousels/ItemCarousel";
// Get the tag by slug from the wordpress graphql api
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
        brands {
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

export default function Brand({ brand }) {
  if (!brand) return null;
  return (
    <>
      <BrandMasthead slug={brand.slug} />
      <BrandPromo />
    </>
  );
}
