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
    <table>
      {data.categories.nodes.map((category, index) => (
        <tr key={index}>
          <td>{category.name}</td>
          <td>
          {category.children.nodes.length > 0 && (
            <ul>
              {category.children.nodes.map((child, index) => (
                <li key={index}>
                  <p>{child.name}</p>
                  <p>{child.description}</p>
                </li>
              ))}
            </ul>
          )}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Categories;
