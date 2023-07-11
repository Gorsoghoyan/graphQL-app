import { Sidebar } from "../../layouts";
import { useLocations } from "../../hooks";

import { 
  PageWrapper, 
  CharacterCardList, 
  CharacterCard, 
  PickSelect
} from "../../components";

export default function Locations() {
  const { 
    error, 
    loading, 
    data, 
    locationId,
    handleChangeId 
  } = useLocations();

  return (
    <PageWrapper error={error} loading={loading}>
      <Sidebar>
        <PickSelect 
          title="Locations"
          currentValue={locationId}
          total={data?.locations.info.count}
          onChange={handleChangeId}
        />
      </Sidebar>
      <CharacterCardList
        listOfData={data?.location.residents}
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
      />
    </PageWrapper>
  );
}