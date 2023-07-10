import { Sidebar } from "../../layouts";
import { useLocations } from "../../hooks";

import { 
  PageWrapper, 
  CharacterCardList, 
  CharacterCard, 
  PickSelect
} from "../../components";

export default function Locations() {
  const { error, loading, data } = useLocations();

  return (
    <PageWrapper error={error} loading={loading}>
      <Sidebar>
        {/* <PickSelect 
          title="Location"
        /> */}
      </Sidebar>
      <CharacterCardList
        listOfData={data?.locations?.results[0].residents}
        renderItem={(item) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            location={item.location}
            linkWork={false}
          />
        )}
      />
    </PageWrapper>
  );
}