import { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../utils/gqlQueries";

export const useEpisodes = () => {
  const [episodeId, setEpisodeId] = useState(1);

  const { error, loading, data } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  const handleChangeId = useCallback((id: number) => {
    if (id === episodeId) return;
    setEpisodeId(id);
  }, [episodeId]);

  return {
    error,
    loading,
    data,
    episodeId,
    handleChangeId
  };
};