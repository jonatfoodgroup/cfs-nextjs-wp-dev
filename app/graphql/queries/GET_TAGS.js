import { gql } from "@apollo/client";

const GET_TAGS = gql`
  query Tags {
    tags(first: 100) {
      nodes {
        id
        title:name
        slug
        description
      }
    }
  }
`;

export default GET_TAGS;
