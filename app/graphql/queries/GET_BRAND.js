import { gql } from '@apollo/client';

const GET_BRAND = gql`
query Brand($slug: ID!) {
  brand(id: $slug, idType: SLUG) {
    title
    content
    excerpt
    slug
  }
}
`;

export default GET_BRAND;