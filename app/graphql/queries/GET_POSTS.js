import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query Posts {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        content
        date
      }
    }
  }
`;

export default GET_POSTS;