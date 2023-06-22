import { gql } from '@apollo/client';

// A union style SearchResult type that queries all the types we want to search for:
// - SKU
// - Ingredient
// - Inspiration
// - Recipe
// - Topic
// - Title
// - Description
// - Tag

const SEARCH = gql`
  query Search($search: String!) {
    search(search: $search) {
      ... on Sku {
        id
        title
        description
        tags
      }
      ... on Ingredient {
        id
        title
        description
        tags
      }
      ... on Inspiration {
        id
        title
        description
        tags
      }
      ... on Recipe {
        id
        title
        description
        tags
      }
      ... on Topic {
        id
        title
        description
        tags
      }
      ... on Post {
        id
        title
        description
        tags
      }
      ... on Title {
        id
        title
        description
        tags
      }
      ... on Description {
        id
        title
        description
        tags
      }
      ... on Tag {
        id
        title
        description
        tags
      }
    }
  }
`;

export default SEARCH;
