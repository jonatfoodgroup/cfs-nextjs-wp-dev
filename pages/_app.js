import { useState, useContext, createContext } from "react";
import Layout from "@/components/Layout";
import LayoutEditor from "@/components/Drawers/LayoutEditor";
// Hook into when anyone visits any page on the site
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [layout, setLayout] = useState([]);
  return (
    <>
      <LayoutEditor layout={layout} setLayout={setLayout} />
    <Layout layout={layout}>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
