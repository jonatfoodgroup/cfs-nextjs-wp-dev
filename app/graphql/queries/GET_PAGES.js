import { gql } from "@apollo/client";

const GET_PAGES = gql`
  query Pages {
    pages(first: 100) {
      nodes {
        id
        title
        slug
        content
        date
      }
    }
  }
`;

export default GET_PAGES;