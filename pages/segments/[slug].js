import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import PageMeta from "@/components/PageMeta";
import { Icon } from "@iconify/react";

// Get the tag by slug from the wordpress graphql api
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Segment($slug: ID!) {
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
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (segment.segmentFields.pointsOfDifference) {
      setSelectedTab(segment.segmentFields.pointsOfDifference[0]);
    }
  }, [segment]);

  if (!segment) return <div>doesnt exist</div>;
  return (
    <>
      <PageMeta title={segment.title} description={segment.excerpt} />
      <Container>
        <Row>
          <Col md={{ span: 5 }} className={"mt-5"}>
            <div className="pageHeader">
              <div
                data-aos="fade-up"
                dangerouslySetInnerHTML={{ __html: segment.content }}
              ></div>
              <Button
                data-aos="fade-up"
                data-aos-delay="100"
                variant="primary"
                size="lg"
                className="btn btn-primary"
              >
                Connect with an expert
              </Button>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={{ span: 6 }} className={"mt-3"}>
            <img
              data-aos="fade-up"
              data-aos-delay="200"
              src={segment.featuredImage.node.guid}
              className="img-fluid"
              alt={segment.title}
            />
          </Col>
        </Row>
      </Container>
      <section style={{ background: "#F7F5F2", padding: '30px 0px',marginTop: "50px"}}>
      <Container >
        <Row style={{  }}>
          <Col md={6} xs={12}>
            <PointsofDifference
              segment={segment}
              setSelectedTab={setSelectedTab}
            />
          </Col>
          <Col md={6} xs={12}>
            {selectedTab && (
              <div style={{ marginTop: "0rem" }}>
                <div
                  dangerouslySetInnerHTML={{ __html: selectedTab.content }}
                ></div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      </section>

      <Container>
        <Row style={{ marginTop: "3rem" }}>
          {segment.segmentFields.subsegment &&
            segment.segmentFields.subsegment.map((subsegment) => {
              return (
                <Col key={subsegment.title} xs={12} md={4}>
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

const PointsofDifference = ({ segment, setSelectedTab }) => {
  if (!segment.segmentFields.pointsOfDifference) return null;
  return (
    <>
      {segment.segmentFields.pointsOfDifference &&
        segment.segmentFields.pointsOfDifference.map((pod) => {
          return (
            <Row key={pod.title} style={{ marginTop: "0rem" }}>
              <Col md={12}>
                <h3
                  style={{ fontSize: "1.5rem", margin: 0, lineHeight: "2.5", borderBottom: '1px solid #ccc', cursor: 'pointer' }}
                  className="text--red"
                  onClick={() => setSelectedTab(pod)}
                >
                  {pod.title}
                  <Icon
                    icon="akar-icons:chevron-right"
                    style={{ marginLeft: "1rem" }}
                  />
                </h3>
              </Col>
            </Row>
          );
        })}
    </>
  );
};
