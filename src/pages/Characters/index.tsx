import { Sidebar } from "../../layouts";
import { useCharacters } from "../../hooks";
import CharacterFilters from "../../components/CharacterFilters";

import { 
  PageWrapper, 
  CharacterCardList, 
  CharacterCard, 
  Pagination
} from "../../components";

export default function Characters() {
  const { 
    data, 
    error, 
    loading, 
    page,
    status,
    gender,
    species,
    handlePageChange,
    handleFilterChange,
  } = useCharacters();

  return (
    <PageWrapper error={error} loading={loading}>
      <Sidebar>
        <CharacterFilters 
          status={status}
          gender={gender}
          species={species}
          onChange={handleFilterChange}
        />
      </Sidebar>
      <CharacterCardList
        listOfData={data?.characters.results}
        renderItem={(item) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            location={item.location}
          />
        )}
      >
        <Pagination 
          totalPagesNumber={data?.characters.info.pages}
          currentPage={page} 
          onPageChange={(pageNumber) => {
            handlePageChange(pageNumber);
          }}
        />
      </CharacterCardList>
    </PageWrapper>
  );
}