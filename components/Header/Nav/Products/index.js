import GET_PRODUCTS from "@/app/graphql/queries/GET_PRODUCTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProductsMenu = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    client: client,
  });
  const tabs = [
    {
      title: "All",
      slug: "soups",
      component: <p>Test</p>
    },
    {
      title: "Breakfast",
      slug: "breakfast",
      component: <p>Test</p>
    },
  ];

  useEffect(() => {
    console.log('data',);
  }, [data]);
  const [selectedTab, setSelectedTab] = useState(tabs[0].slug);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Row>
        <Col>
        <p>Categories</p>
        <ul style={{padding: 0, margin: 0, listStyleType: 'none'}}>
          {tabs.map((tab, index) => {
            return (
              <li key={index} onClick={() => setSelectedTab(tab.slug)}>
                {tab.title}
              </li>
            );
          })}
        </ul>
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

export default ProductsMenu;
