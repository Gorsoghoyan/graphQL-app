import { Text } from "../";
import { selectsConfig } from "../../configs";
import { CharacterFiltersProps } from "../../types";
import SelectBox from "./SelectBox";
import styles from "../../assets/styles/components/filters.module.scss";

export default function CharacterFilters({
  status,
  gender,
  species,
  onChange
}: CharacterFiltersProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text as="h2" size="lg">Filters</Text>
        <span onClick={() => window.location.reload()}>
          Clear filters
        </span>
      </div>
      {selectsConfig.map((select) => (
        <SelectBox
          key={select.id}
          filter={select.filter}
          options={select.options}
          placeholder={select.placeholder}
          defaultValue={
            select.filter === "status" ? status
              : select.filter === "gender" ? gender
                : species
          }
          onChange={onChange}
        />
      ))}
    </div>
  );
}