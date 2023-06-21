// Header footer, enl, and whats next are global components that are not editable in the CMS.
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnlSignup from "@/components/EnlSignup";
import WhatsNext from "@/components/WhatsNext";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <WhatsNext />
      <EnlSignup />
      <Footer />
    </>
  )
}