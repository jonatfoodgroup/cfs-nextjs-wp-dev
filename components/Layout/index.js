// Header footer, enl, and whats next are global components that are not editable in the CMS.
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnlSignup from "@/components/EnlSignup";
import WhatsNext from "@/components/WhatsNext";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children, layout }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      {children}
      {layout.map((section) => (
        <React.Fragment key={section.id}>{section.component}</React.Fragment>
      ))}
      <WhatsNext />
      <EnlSignup />
      <Footer />
    </>
  )
}