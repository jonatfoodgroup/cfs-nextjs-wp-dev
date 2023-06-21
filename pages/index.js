import React, { use, useState, useEffect } from "react";
// Global CSS includes should be moved higher up in the templating system
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";

// Global modules
import WhatsNext from "@/components/WhatsNext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Masthead from "@/components/Masthead";
import PageMeta from "@/components/PageMeta";
import { Container, Row, Col } from "react-bootstrap";

// Local modules

import Section from "@/components/Section";
import Categories from "@/components/Categories";
import Tags from "@/components/Topics";
import Posts from "@/components/Posts";
import Pages from "@/components/Pages";
import BrandSelector from "@/components/BrandSelector";
import SubscribeModal from "@/components/Modals/Subscribe";
import LayoutEditor from "@/components/Drawers/LayoutEditor";
import ItemCarousel from "@/components/Carousels/ItemCarousel";
import EnlSignup from "@/components/EnlSignup";
import HomeRecipes from "@/components/HomeRecipes";
import HomeContent from "@/components/HomeContent";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import GET_PAGES from "@/app/graphql/queries/GET_PAGES";
import GET_HOME from "@/app/graphql/queries/GET_HOME";
import { Content } from "next/font/google";
import HomeInsights from "@/components/HomeInsights";


export default function Home() {
  const pageMeta = {
    title: "Home",
    description: "Home page description",
  }

  const [layout, setLayout] = useState([
      {
        id: 1,
        name: "Header",
        component: <Header />,
      },
      {
        id: 2,
        name: "Masthead",
        component: <Masthead />,
      },
      {
        id: 3,
        name: "Home",
        component:
        <Section title={"Our Family of Brands"}>
        <HomeContent />
        </Section>,
        
      },
      {
        id: 5,
        name: "Brand Selector",
        component: <BrandSelector />,
      },
      {

        id:6,
        name: "Recipes",
        component: <Section title={"Get Inspired"}  backgroundColor={'#F7F5F2'}>
          <HomeRecipes />
        </Section>,
        },
    

        {

          id:7,
          name: "Insights",
          component: <Section title={"See the Latest Trends & Insights"}  backgroundColor={'#ffffff'}>
            <HomeInsights />
          </Section>,
          },
        {


        id:7,
        name: "Segments",
        component: <Section title={"Discover the Possibilities for Your Operation"}  backgroundColor={'#F7F5F2'}>
          <SegmentCarousel />
        </Section>,
      },


     
     /* {
        id: 6,
        name: "Categories",
        component: <Section title={"Categories"}><Categories /></Section>,
      },
      {
        id: 7,
        name: "Tags",
        component: <Section title={"Tags"}><Tags /></Section>,
      },
      {
        id: 8,
        name: "Posts",
        component: <Section title={"Posts"}><Posts /></Section>,
      },
     */ 
    
      {
        id: 10,
        name: "WhatsNext",
        component: 
          <WhatsNext />,
      },
      {
        id: 11,
        name: "EnlSignup",
        component: <EnlSignup />,
      },

      {
        id: 12,
        name: "Footer",
        component: <Footer />,
      },
    ]);
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <SubscribeModal />
      {layout.map((section) => (
        <React.Fragment key={section.id}>
          {section.component}
        </React.Fragment>
      ))}
    </>
  );
}

const SegmentCarousel = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <ItemCarousel settings={{ dots: true,  arrows: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3 }}
      items={data.segments.nodes}
      title={"SegmentCarousel"}
      type={"segment"}
    />
  );
}
