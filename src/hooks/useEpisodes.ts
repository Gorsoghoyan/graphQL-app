import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../utils/gqlQueries";

export const useEpisodes = () => {
  const { error, loading, data } = useQuery(GET_EPISODES, {
    variables: { page: 3 },
    notifyOnNetworkStatusChange: true
  });

  console.log(data)

  return {
    error,
    loading,
    data
  };
};