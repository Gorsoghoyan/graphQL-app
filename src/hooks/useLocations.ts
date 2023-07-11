import { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../utils/gqlQueries";

export const useLocations = () => {
  const [locationId, setLocationId] = useState(1);

  const { error, loading, data } = useQuery(GET_LOCATION, {
    variables: { id: locationId }
  });

  const handleChangeId = useCallback((id: number) => {
    if (id === locationId) return;
    setLocationId(id);
  }, [locationId]);

  return {
    error,
    loading,
    data,
    locationId,
    handleChangeId
  };
};