import { gql } from '@apollo/client';

const GET_BRANDS = gql`
  query GET_BRANDS {
    brands(first:100)  {
      nodes {
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