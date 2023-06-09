import { useState, useEffect} from "react";

const CompanyLogo = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} />
  )
}

export default CompanyLogo;