import { gql } from '@apollo/client';

const GET_BRANDS = gql`
  query GET_BRANDS {
    brands(first:100)  {
      nodes {
        __typename
        id
        title
        slug
        excerpt
        menuOrder 
        brandFields {
          brandIntroHeadline
          fieldGroupName
          brandLogo {
            altText
              sourceUrl
              id
          }
        }
        featuredImage {
          node {
            guid
            id
            slug
            sourceUrl
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