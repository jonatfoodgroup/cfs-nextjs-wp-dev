import { gql } from '@apollo/client'

const GET_MENUS = gql`
  query GET_MENUS {
    menus {
      nodes {
        id
        name
        locations 
        menuItems {
          nodes {
            id
            parentId
            label
            childItems {
              nodes {
                id
                label
              }
            }
          }
        }
      }
    }
  }
`

export default GET_MENUS;