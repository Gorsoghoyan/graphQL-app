import { Text } from "../";
import Select from "react-select";
import styles from "../../assets/styles/components/pickSelect.module.scss";
import { PickSelectProps } from "../../types";

export default function PickSelect({
  total,
  title
}: PickSelectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text as="h2">Pick {title}</Text>
      </div>
      <Select 
        // options={[...Array(total).keys()].map((item) => console.log(item))}
      />
    </div>
  );
}