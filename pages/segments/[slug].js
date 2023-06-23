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
      <Col>
      <div style={{padding: 20}}>
        <h4>{headline}</h4>
        <p>{sectionCopy}</p>
        </div>
      </Col>
    </>
  );
}

export default function Segment({ segment }) {
  useEffect(() => {
    console.log(segment);
  }, [segment]);

  if (!segment) return <div>doesnt exist</div>;
  return (
    <>
      <PageMeta title={segment.title} description={segment.excerpt} />
      <Container>
        <Row>
          <Col md={{ span: 6 }} className={"mt-5"}>
            <div dangerouslySetInnerHTML={{ __html: segment.content }}></div>
            <Button variant="primary" size="lg" className="btn btn-primary">
              Connect with an expert
            </Button>
          </Col>

          <Col md={{ span: 6 }} className={"mt-3"}>
            <img
              src={segment.featuredImage.node.guid}
              className="img-fluid"
              alt={segment.title}
            />
          </Col>
        </Row>

        <Row xs={12} md={3} style={{marginTop: '3rem'}}>
          {
            segment.segmentFields.subsegment &&
            segment.segmentFields.subsegment.map((subsegment) => {
              return (
                <Subsegment
                  headline={subsegment.title}
                  sectionCopy={subsegment.description}
                  key={subsegment.title}
                />
              );
            })
          }
          <Subsegment
            headline={"Subsegment"}
            sectionCopy={
              "Curabitur suspendisse quisque ornare torquent parturient convallis fringilla ullamcorper curabitur odio porttitor augue suscipit adipiscing vestibulum vestibulum ullamcorper fermentum sem at est placerat diam per sociis."
            }
          />
          <Subsegment
            headline={"Subsegment"}
            sectionCopy={
              "Curabitur suspendisse quisque ornare torquent parturient convallis fringilla ullamcorper curabitur odio porttitor augue suscipit adipiscing vestibulum vestibulum ullamcorper fermentum sem at est placerat diam per sociis."
            }
          />
          <Subsegment
            headline={"Subsegment"}
            sectionCopy={
              "Curabitur suspendisse quisque ornare torquent parturient convallis fringilla ullamcorper curabitur odio porttitor augue suscipit adipiscing vestibulum vestibulum ullamcorper fermentum sem at est placerat diam per sociis."
            }
          />
        </Row>

        <PointsofDifference segment={segment} />
      </Container>

    </>
  );
}

// A 2 column layout with buttons on the left, and tab panels on the right for each point of difference
const PointsofDifference = ({segment}) => {
  const [tabs, setTabs] = useState([])
  return (
    <>
      <Row>
        <Col md={{ span: 6 }} className={"mt-5"}>
          <h3>Snacking Made Easy</h3>
        </Col>
        <Col md={{ span: 6 }} className={"mt-5"}>
          <p style={{fontSize: '1.2rem'}}>Drive profits with our top snacking brand brands, including Snyder’s of Hanover® flavored pretzels, Kettle Brand® or Cape Cod® kettle-cooked potato chips, Late July® tortilla chips or Lance® peanut butter sandwich crackers.</p>
        </Col>
      </Row>
    </>
  )
}