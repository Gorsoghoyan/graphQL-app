import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos($id: ID!) {
    todos {
      id
      title
      completed
    }
  }
`