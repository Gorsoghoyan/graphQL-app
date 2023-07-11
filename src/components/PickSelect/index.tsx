import Select from "react-select";
import { Text } from "../";
import { PickSelectProps } from "../../types";
import { createOptions } from "../../utils/createOptions";
import styles from "../../assets/styles/components/pickSelect.module.scss";

export default function PickSelect({
  total,
  title,
  currentValue,
  onChange
}: PickSelectProps) {
  const options = createOptions(total, title);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text as="h2">Pick {title}</Text>
      </div>
      <Select
        placeholder="Choose..."
        options={options}
        defaultValue={options.find((option) => {
          return option.value === currentValue;
        })}
        onChange={(newValue) => {
          newValue && onChange(newValue.value)
        }}
      />
    </div>
  );
}