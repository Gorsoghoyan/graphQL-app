import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters(
    $page: Int!, 
    $filter: FilterCharacter
  ) {
    characters(
      page: $page, 
      filter: $filter
    ) {
      results {
        id
        name
        image
        status
        location {
          name
        }
      }
      info {
        pages
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
      gender
      status
      species
      location {
        name
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episodes {
      info {
        count
      }
    }
    episode(id: $id) {
      characters {
        id
        name
        image
        status
        location {
          name
        }
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    locations {
      info {
        count
      }
	  }
    location(id: $id) {
      residents {
        id
        name
        image
        status
        location {
          name
        }
      }
    }
  }
`;