// Global CSS includes should be moved higher up in the templating system
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Global modules
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";

// Head
import Head from "next/head";
export default function Home() {
  const pageMeta = {
    title: "Home",
    description: "Home page description",
  }
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <Header />
      <main>
      </main>
      <Footer />
    </>
  );
}
