// Header footer, enl, and whats next are global components that are not editable in the CMS.
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnlSignup from "@/components/EnlSignup";
import WhatsNext from "@/components/WhatsNext";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/cjd3qpj.css" />
      </Head>
      <Header />
      {children}
      <WhatsNext />
      <EnlSignup />
      <Footer />
    </>
  )
}