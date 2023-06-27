import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";

const BrandsMenu = ({
  setSelected,
}) => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });
  const tabs = [
    {
      title: "Soup, Meals & Sauces",
      slug: "soups",
      component: <BrandLogoGrid slug="soups" />,
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
          <Row>
            {data?.brands?.nodes?.map((brand, index) => {
              return (
                <Col key={index} xs={12} md={4} data-aos="fade-up" data-aos-delay={index * 50}>
                  <BrandLogo brand={brand} onClick={() => setSelected(null)} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

const BrandLogoGrid = ({ slug, brands }) => {
  return <></>;
};

const BrandLogo = ({ brand }) => {
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    if (brand.brandFields.brandLogo) {
      setLogo(brand.brandFields.brandLogo.sourceUrl);
    }
    
  }, [brand]);

  return (
    <Link 
      href={`/brands/${brand.slug}`}
      as={`/brands/${brand.slug}`}
      alt={brand.name}
      >
    {logo && <img src={logo} width={160} />}</Link>
  );
};

export default BrandsMenu;
