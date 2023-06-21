import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";


const BrandsArchive = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  return {
    props: {
      brands: data.brands.nodes,
    },
  };
  return (
    <div>
      <h1>Brands Archive</h1>
    </div>
  );
};

export default BrandsArchive;