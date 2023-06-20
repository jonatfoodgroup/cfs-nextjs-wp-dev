import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../app/globals.css";


// Get the tag by slug from the wordpress graphql api
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Tag($slug: ID!) {
        segment(id: $slug, idType: SLUG) {
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
      segment: data.segment,
    },
  };
}

// getStaticPaths
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Segment {
        segments {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: data.segments.nodes.map((segment) => `/segments/${segment.slug}`) || [],
    fallback: false,
  };
}

export default function Segment({ segment }) {

  useEffect(() => {
    console.log(segment);
  }, [segment]);

  if (!segment) return <div>doesnt exist</div>;
  return (
    <>
      <h1>{segment.title}</h1>
      <Container>
     
     
      <Row>

        <Col md={{ span: 8}}>
          <div dangerouslySetInnerHTML={{ __html: (segment.content) }}>

          </div>
        </Col>

        <Col  md={{ span: 4}}>
        <img src={segment.featuredImage.node.guid} className="img-fluid" />
    </Col>

      </Row>

    </Container>

    </>
  );
}
