import { gql } from '@apollo/client';

const GET_MEDIA_ITEMS = gql`
query GET_MEDIA_ITEMS {
  mediaItems {
    nodes {
      id
      title
      uri
      guid
      mimeType
      mediaType
      altText
      date
      fileSize
    }
  }
}`

export default GET_MEDIA_ITEMS;