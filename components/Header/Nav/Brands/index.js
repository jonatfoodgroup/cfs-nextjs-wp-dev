import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const BrandsMenu = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });
  const tabs = [
    {
      title: "Soup, Meals & Sauces",
      slug: "soups",
      component: <BrandLogoGrid slug="soups"  />,
    },
    {
      title: "Snacks & Beverage",
      slug: "snacks",
      component: <BrandLogoGrid slug="snacks" />,
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

const BrandLogoGrid = ({ slug, brands }) => {

  return (
    <>
      {brands &&
        brands.nodes.map((brand, index) => {
          return (
            <div key={index}>
             <BrandLogo brand={brand} />
            </div>
          );
        })}
    </>
  );
};

const BrandLogo = ({ brand }) => {
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    if (brand.brandFields.brandLogo) {
      setLogo(brand.brandFields.brandLogo.sourceUrl);
    }
  }, [brand]);

  return (
    <>
      {logo && (
        <img
          src={logo}
          width={200}
          height={60}
          />
      )}
    </>
  );
};


export default BrandsMenu;
