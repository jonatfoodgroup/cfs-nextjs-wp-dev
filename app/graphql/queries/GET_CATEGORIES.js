import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query Categories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        description 
        children {
          nodes {
            id
            name
            slug
            description
          }
        }
      }
    }
  }
`;

export default GET_CATEGORIES;
