import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        location {
          name
        }
        episode {
          episode
          name
        }
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      image
      location {
        name
      }
    }
  }
`;