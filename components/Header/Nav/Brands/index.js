import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import Link from "next/link";
import { useEffect } from "react";

const BrandsMenu = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <ul>
        {
          data &&
          data.brands.nodes.map((brand) => {
            return (
              <li key={brand.id}>
                <Link href={`/brands/${brand.slug}`}>
                  {brand.title}
                </Link>
              </li>
            )
            })
        }
      </ul>
    </>
  );
}

export default BrandsMenu;