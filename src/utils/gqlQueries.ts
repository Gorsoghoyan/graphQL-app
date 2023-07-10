import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
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
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations($page: Int!) {
    locations(page: $page) {
      results {
        id
        name
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
  }
`;