import { useState, useEffect} from "react";
import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import Link from "next/link";

const CompanyLogo = ({ src, alt }) => {
  const [logo, setLogo] = useState('');
  const [logoAlt, setLogoAlt] = useState('');
  useEffect(() => {
    const getLogo = async () => {
      const { data } = await client.query({
        query: gql`
          query MyQuery {
            siteLogo {
              sourceUrl
              altText
            }
          }
        `,
      });
      setLogo(data.siteLogo.sourceUrl);
    }
    getLogo();
  }, []);

  return (
    <>
      <Link href="/">
        <img src={logo} alt={logoAlt} />
      </Link>
    </>
  )
}

export default CompanyLogo;