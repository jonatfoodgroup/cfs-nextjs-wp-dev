import React, { use, useState, useEffect } from "react";

import Masthead from "@/components/Masthead";
import PageMeta from "@/components/PageMeta";
import Section from "@/components/Section";
import SectionNoContainer from "@/components/Section/SectionNoContainer";
import BrandSelector from "@/components/BrandSelector";
import SubscribeModal from "@/components/Modals/Subscribe";
import ItemCarousel from "@/components/Carousels/ItemCarousel";
import HomeRecipes from "@/components/HomeRecipes";
import HomeContent from "@/components/HomeContent";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
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
  ]);
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      {layout.map((section) => (
        <React.Fragment key={section.id}>{section.component}</React.Fragment>
      ))}
    </>
  );
}

const SegmentCarousel = () => {
  const [segments, setSegments] = useState([]);
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  useEffect(() => {
    if (data) {
      if (data.segments.nodes.length > 0) {
        setSegments(data.segments.nodes);

        // order by title
        setSegments(
          segments.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
        );
      }
    }
  }, [data]);


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
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
             
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      }}
      items={data.segments.nodes}
      title={"SegmentCarousel"}
      type={"segment"}
    />
  );
};
