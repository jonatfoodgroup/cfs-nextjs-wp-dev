// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_CATEGORIES from "@/app/graphql/queries/GET_CATEGORIES";
import client from "@/app/apollo-client";

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.categories.nodes.map((category, index) => (
        <li key={index}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          {category.children.nodes.length > 0 && (
            <ul>
              {category.children.nodes.map((child, index) => (
                <li key={index}>
                  <h3>{child.name}</h3>
                  <p>{child.description}</p>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
