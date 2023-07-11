import GET_PRODUCTS from "@/app/graphql/queries/GET_PRODUCTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./Products.module.css";

const ProductsMenu = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    client: client,
  });
  const tabs = [
    {
      title: "Bakery",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-bakery.png"
          height={183}
          width={200}
          alt="Bakery"
          quality={100}
          className="#" />
        <Link href="#">Bakery</Link>
      </div>

    },
    {
      title: "Bases, Broths and Stocks",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-bases.png"
          height={183}
          width={200}
          quality={100}
          alt="Bakery"
          className="#" />
        <Link href="#">Bases, Broths 
and Stocks</Link>
      </div>

    }, 
    {
      title: "Beverages",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-bev.png"
          height={183}
          width={200}
          quality={100}
          alt="Bakery"
          className="#" />
        <Link href="#">Beverages</Link>
      </div>

    },
    {
      title: "Entrees",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-entree.png"
          height={183}
          width={200}
          quality={100}
          alt="Entrees"
          className="#" />
        <Link href="#">Entrees</Link>
      </div>

    }
    ,
    {
      title: "Sauces, Salsas and Gravies",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-sauces.png"
          height={183}
          width={200}
          quality={100}
          alt="Entrees"
          className="#" />
        <Link href="#">Sauces, Salsas and Gravies</Link>
      </div>

    }
    ,
    {
      title: "Snacks",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-snacks.png"
          height={183}
          width={200}
          quality={100}
          alt="Entrees"
          className="#" />
        <Link href="#">Snacks</Link>
      </div>

    }
    ,
    {
      title: "Soups",
      slug: "soups",
      component: 
      <div className={styles.productMenuItem}>
      <Image
          src="/product-nav-soups.png"
          height={183}
          width={200}
          quality={100}
          alt="Soups"
          className="#" />
        <Link href="#">Soups</Link>
      </div>

    }
  ];
{/*
complete with icons from /Public:

Bakery

Bases, Broths 
and Stocks

Beverages

Entrees

Sauces, Salsas 
and Gravies

Snacks

Soups



*/}



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
