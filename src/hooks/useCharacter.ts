import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../utils/gqlQueries";

export const useCharacter = () => {
  const { characterId } = useParams();

  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { characterId }
  });

  return {
    error,
    loading,
    data
  };
};