import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        episode { name }
        location { name }
      }
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($title: string!, $completed: boolean!) {
    createTodo(input: {
      title: $title,
      completed: $completed
    }) {
      id
      title
      completed
    }
  }
`;