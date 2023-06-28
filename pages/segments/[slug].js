import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import PageMeta from "@/components/PageMeta";

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
          segmentFields {
            fieldGroupName
            subsegment {
              description
              title
            }
            pointsOfDifference {
              title
              content
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
    paths:
      data.segments.nodes.map((segment) => `/segments/${segment.slug}`) || [],
    fallback: false,
  };
}

export function Subsegment({ headline, sectionCopy }) {
  return (
    <>
      <div style={{ padding: 20 }}>
        <h3 className="text--red">{headline}</h3>
        <p>{sectionCopy}</p>
      </div>
    </>
  );
}

export default function Segment({ segment }) {
  if (!segment) return <div>doesnt exist</div>;
  return (
    <>
      <PageMeta title={segment.title} description={segment.excerpt} />
      <Container>
        <Row>
          
          <Col md={{ span: 5 }} className={"mt-5"}>
            <div data-aos="fade-up" dangerouslySetInnerHTML={{ __html: segment.content }}></div>
            <Button data-aos="fade-up" data-aos-delay="100" variant="primary" size="lg" className="btn btn-primary">
              Connect with an expert
            </Button>
          </Col>
          <Col md={1}></Col>
          <Col md={{ span: 6 }} className={"mt-3"}>
            <img
              data-aos="fade-up" data-aos-delay="200"
              src={segment.featuredImage.node.guid}
              className="img-fluid"
              alt={segment.title}
            />
          </Col>
        </Row>

        <PointsofDifference segment={segment} />

        <Row style={{ marginTop: "3rem" }}>
          {segment.segmentFields.subsegment &&
            segment.segmentFields.subsegment.map((subsegment) => {
              return (
                <Col key={subsegment.title} xs={12} md={3}>
                  <Subsegment
                    headline={subsegment.title}
                    sectionCopy={subsegment.description}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

// A 2 column layout with buttons on the left, and tab panels on the right for each point of difference
const PointsofDifference = ({ segment }) => {
  if (!segment.segmentFields.pointsOfDifference) return null;
  return (
    <>
      {segment.segmentFields.pointsOfDifference &&
        segment.segmentFields.pointsOfDifference.map((pod) => {
          return (
            <Row className="mt-5" key={pod.title}>
              <Col md={{ span: 6 }}>
                <h4 className="text--red">{pod.title}</h4>
              </Col>
              <Col md={{ span: 6 }}>
                <div dangerouslySetInnerHTML={{ __html: pod.content }}></div>
              </Col>
            </Row>
          );
        })}
    </>
  );
};
