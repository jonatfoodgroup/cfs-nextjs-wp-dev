import { useQuery } from "@apollo/client";
import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import client from "@/app/apollo-client";
import PageMeta from "@/components/PageMeta";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const SegmentsArchive = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  const [selectedSegment, setSelectedSegment] = useState(null);
  return (
    <>
      <PageMeta title="Segments" description="Campbell's Foodservice Segments" />
      <Container>
        <Row className={"align-middle"}>
          <Col md={{ span: 6 }} className={"mt-5"} style={{padding: "40px"}}>
            <h2>
              Get solutions and inspiration for your business segment from Campbell&#8217;s Foodservice.
            </h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
            </p>
          </Col>
          <Col md={{ span: 6 }} className={"mt-3"}>
            <img
              src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/brands-archive-featured.jpg"
              className="img-fluid"
              alt="test"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{padding: "10vh 0px"}}>
          <Col md={'4'}>
            {data?.segments?.nodes?.map((segment) => (
              <div key={segment.id} onClick={() => setSelectedSegment(segment)}>
                <h4 style={{fontWeight: 400, color: (selectedSegment?.id === segment.id) ? "#e31837" : "#000"}}>{segment.title}</h4>
              </div>
            ))}
          </Col>
          <Col md={'8'}>
            {selectedSegment && (
              <SegmentTab segment={selectedSegment} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const SegmentTab = ({ segment }) => {
  return (
    <div>
      <h4>{segment.title}</h4>
    </div>
  );
};

export default SegmentsArchive;
