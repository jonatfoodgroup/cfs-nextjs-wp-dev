import { gql } from '@apollo/client';

const GET_SEGMENTS = gql`
  query GET_SEGMENTS {
    segments {
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

export default GET_SEGMENTS;