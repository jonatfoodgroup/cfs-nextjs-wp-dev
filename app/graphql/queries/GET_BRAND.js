import { gql } from "@apollo/client";

const GET_BRAND = gql`
  query Brand($slug: ID!) {
    brand(id: $slug, idType: SLUG) {
      __typename
      id
      title
      content
      excerpt
      slug
      brandFields {
        brandIntroHeadline
        brandLogo {
          sourceUrl
        }
        brandleftimage {
          sourceUrl
        }
        brandrightimage {
          sourceUrl
        }
        
      }
    }
  }
`;

export default GET_BRAND;
