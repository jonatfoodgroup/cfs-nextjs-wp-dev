import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";

// Global modules
import WhatsNext from "@/components/WhatsNext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EnlSignup from "@/components/EnlSignup";

// Get the tag by slug from the wordpress graphql api
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Brand($slug: ID!) {
        brand(id: $slug, idType: SLUG) {
          title
          content
          excerpt
          slug
          featuredImage {
            node {
              guid
              id
              slug
              description
              altText
              uri
            }
          }
        }
      }
    `,
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
  useEffect(() => {
    console.log(brand);
  }, [brand]);

  if (!brand) return <div>doesnt exist</div>;
  return (
    <>
      <Header />
      <WhatsNext />
      <EnlSignup />
      <Footer />
    </>
  );
}
