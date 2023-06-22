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
import Section from "@/components/Section";
import SectionNoContainer from "@/components/Section/SectionNoContainer";
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
import FlexScroll from "@/components/Carousels/FlexScroll";

export default function Home() {
  const pageMeta = {
    title: "Home",
    description: "Home page description",
  };

  const [layout, setLayout] = useState([
    {
      id: 2,
      name: "Masthead",
      component: <Masthead />,
    },
    {
      id: 3,
      name: "Home",
      component: (
        <Section title={"Our Family of Brands"}>
          <HomeContent />
        </Section>
      ),
    },
    {
      id: 5,
      name: "Brand Selector",
      component: <BrandSelector />,
    },
    {
      id: 6,
      name: "Recipes",
      component: (
        <Section title={"Get Inspired"} backgroundColor={"#F7F5F2"}>
          <HomeRecipes />
        </Section>
      ),
    },

    {
      id: 7,
      name: "Insights",
      component: (
        <SectionNoContainer
          title={"See the Latest Trends & Insights"}
          backgroundColor={"#ffffff"}
        >
          <FlexScroll />
        </SectionNoContainer>
      ),
    },
    {
      id: 7,
      name: "Segments",
      component: (
        <Section
          title={"Discover the Possibilities for Your Operation"}
          backgroundColor={"#F7F5F2"}
        >
          <SegmentCarousel />
        </Section>
      ),
    },
    {
      id: 10,
      name: "WhatsNext",
      component: <WhatsNext />,
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
      {layout.map((section) => (
        <React.Fragment key={section.id}>{section.component}</React.Fragment>
      ))}
      <SubscribeModal />
    </>
  );
}

const SegmentCarousel = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <ItemCarousel
      settings={{
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      }}
      items={data.segments.nodes}
      title={"SegmentCarousel"}
      type={"segment"}
    />
  );
};
