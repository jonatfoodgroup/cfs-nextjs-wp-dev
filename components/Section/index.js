import { useState, useEffect } from "react";

const Section = ({ children, title }) => {
  return (
    <section id={title.toLowerCase().replace(" ", "-")}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;