import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const SegmentsMenu = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });
  const tabs = [
    {
      title: "Soup, Meals & Sauces",
      slug: "soups",
      component: <p>Test</p>
    },
    {
      title: "Snacks & Beverage",
      slug: "snacks",
      component: <p>Test</p>
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].slug);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Row>
        <Col>
          {tabs.map((tab, index) => {
            return (
              <li key={index} onClick={() => setSelectedTab(tab.slug)}>
                {tab.title}
              </li>
            );
          })}
        </Col>
        <Col>
          {tabs.map((tab, index) => {
            if (tab.slug === selectedTab) {
              return tab.component;
            }
          })}
        </Col>
      </Row>
    </>
  );
};

export default SegmentsMenu;
