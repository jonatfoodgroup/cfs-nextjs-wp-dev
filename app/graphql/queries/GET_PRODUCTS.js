import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      nodes {
        excerpt
        id
        title
        slug
        featuredImage {
          node {
            guid
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

export default GET_PRODUCTS;