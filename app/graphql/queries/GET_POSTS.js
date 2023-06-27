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
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default GET_POSTS;