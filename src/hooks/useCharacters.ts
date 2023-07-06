import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../utils/gqlQueries";

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    context: { clientName: "rickAndMorty" }
  });

  console.log(data)

  return {
    error,
    loading,
    data
  };
};