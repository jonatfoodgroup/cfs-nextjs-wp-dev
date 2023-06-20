import { gql } from "@apollo/client";


const GET_HOME = gql`
  query Posts {
    page( id: 4, idType: DATABASE_ID ) {
      id
      databaseId
      title
      content
    }
    }
  
`;

export default GET_HOME;