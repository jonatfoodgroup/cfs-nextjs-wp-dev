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
  useEffect(() => {
    console.log(layout);
  }, [layout]);
  return (
    <>
      <Header />
        {
          layout &&
          layout.map((section, index) => {
            <section key={index}>
              {section.component}
            </section>
          })
        }
      <WhatsNext />
      <EnlSignup />
      <Footer />
    </>
  )
}