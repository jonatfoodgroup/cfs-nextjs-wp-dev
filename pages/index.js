import React, { useState } from "react";
// Global CSS includes should be moved higher up in the templating system
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Global modules
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";

// Local modules
import Section from "@/components/Section";
import Categories from "@/components/Categories";
import Tags from "@/components/Topics";
import Posts from "@/components/Posts";
import Pages from "@/components/Pages";
import BrandSelector from "@/components/BrandSelector";

import LayoutEditor from "@/components/Drawers/LayoutEditor";



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
        id: 6,
        name: "Brand Selector",
        component: <BrandSelector />,
      },
      {
        id: 2,
        name: "Categories",
        component: <Section title={"Categories"}><Categories /></Section>,
      },
      {
        id: 3,
        name: "Tags",
        component: <Section title={"Tags"}><Tags /></Section>,
      },
      {
        id: 4,
        name: "Posts",
        component: <Section title={"Posts"}><Posts /></Section>,
      },
      {
        id: 5,
        name: "Pages",
        component: <Section title={"Pages"}><Pages /></Section>,
      },
      {
        id: 10,
        name: "Footer",
        component: <Footer />,
      },
    ]);
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <LayoutEditor layout={layout} setLayout={setLayout} />
      {layout.map((section) => (
        <React.Fragment key={section.id}>
          {section.component}
        </React.Fragment>
      ))}
    </>
  );
}
