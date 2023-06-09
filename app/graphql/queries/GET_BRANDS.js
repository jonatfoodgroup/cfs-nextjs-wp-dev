import { gql } from '@apollo/client';

const GET_BRANDS = gql`
  query GET_BRANDS {
    brands {
      nodes {
        id
        title
        slug
        menuOrder
        featuredImage {
          node {
            id
            slug
            description
            altText
            uri
          }
        }
      }
    }
  }
`

export default GET_BRANDS;