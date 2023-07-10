import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../utils/gqlQueries";
import { FiltersType } from "../types";

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { data, error, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      filter: {
        status,
        gender,
        species
      }
    }
  });

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleFilterChange = (
    filter: FiltersType, 
    newValue: string
  ) => {
    setPage(1);
    switch (filter) {
      case "status":
        return setStatus(newValue);
      case "gender": 
        return setGender(newValue);
      case "species":
        return setSpecies(newValue);
    }
  };

  return {
    data,
    error,
    loading,
    page,
    status,
    gender,
    species,
    handlePageChange,
    handleFilterChange
  };
};