// V1.0.0
import Posts from "@/components/Posts";
import Pages from "@/components/Pages";
import Categories from "@/components/Categories";
import Tags from "@/components/Topics";
import Brands from '@/components/Brands';

// Planned 1.0.1
// onBranch: sitemap
// import Products from "@/components/Products";
// import Segments from "@/components/Segments";
// import Inspiration from "@/components/Inspiration";
// import Trending from "@/components/Trending";

// Utilities
import { useState } from "react";
import { Button, Popover, OverlayTrigger, FormControl } from "react-bootstrap";
// import styles from "./Sitemap.module.css";


const Sitemap = () => {
  return (
    <>
      <Posts />
      <Pages />
      <Categories />
      <Tags />
      <Brands />
    </>
  );
}

export default Sitemap;