import { Sidebar } from "../../layouts";
import { useEpisodes } from "../../hooks";

import { 
  PageWrapper, 
  CharacterCardList, 
  CharacterCard,
  PickSelect
} from "../../components";

export default function Episodes() {
  const { 
    error, 
    loading, 
    data, 
    episodeId,
    handleChangeId 
  } = useEpisodes();

  return (
    <PageWrapper error={error} loading={loading}>
      <Sidebar>
        <PickSelect 
          title="Episodes"
          currentValue={episodeId}
          total={data?.episodes.info.count}
          onChange={handleChangeId}
        />
      </Sidebar>
      <CharacterCardList
        listOfData={data?.episode.characters}
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