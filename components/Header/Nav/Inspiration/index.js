import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const tabs = [
  {
    name: "Recipes",
    slug: "recipes",
    component: <p>Test</p>,
  },
  {
    name: "Pairings",
    slug: "pairings",
    component: <p>Whoa</p>,
  },
  {
    name: "Trends & Insights",
    slug: "trends-insights",
    component: <p>Test</p>,
  },
  {
    name: "Videos",
    slug: "videos",
    component: <p>Test</p>,
  },
];

const InspirationMenu = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);
  return (
    <>
      <Row>
        <Col>
          <p>By Category</p>
          <ul>
            {tabs.map((tab) => (
              <li key={tab.slug}>
                <a onClick={() => setActiveTab(tab.slug)}>{tab.name}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
        {
          tabs.map((tab) => (
            <div key={tab.slug} className={tab.slug === activeTab ? "active" : "hidden"}>
              {tab.component}
            </div>
          ))
        }
        </Col>
      </Row>
    </>
  );
};

export default InspirationMenu;
