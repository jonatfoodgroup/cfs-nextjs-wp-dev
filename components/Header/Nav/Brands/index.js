import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Brand.module.css";

const BrandsMenu = ({
  setSelected,
}) => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });
  
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

const BrandLogo = ({ brand, onClick }) => {
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
      className={styles.brandLogo}
      >
    {logo && <img src={logo} width={160} />}</Link>
  );
};

export default BrandsMenu;
