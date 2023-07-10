import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../utils/gqlQueries";

export const useLocations = () => {
  const { error, loading, data } = useQuery(GET_LOCATIONS, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true
  });

  console.log(data)

  return {
    error,
    loading,
    data
  };
};