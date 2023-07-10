import { Sidebar } from "../../layouts";
import { useEpisodes } from "../../hooks";

import { 
  PageWrapper, 
  CharacterCardList, 
  CharacterCard,
  PickSelect
} from "../../components";

export default function Episodes() {
  const { error, loading, data } = useEpisodes();

  return (
    <PageWrapper error={error} loading={loading}>
      <Sidebar>
        <PickSelect 
          total={52}
          title="Episodes"
        />
      </Sidebar>
      <CharacterCardList
        listOfData={data?.episodes?.results[0].characters}
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