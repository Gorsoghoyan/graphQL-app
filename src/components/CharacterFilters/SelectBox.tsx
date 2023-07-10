import { SelectBoxProps } from "../../types";
import Select from "react-select";

export default function SelectBox({
  filter,
  options,
  defaultValue,
  placeholder,
  onChange
}: SelectBoxProps) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      defaultValue={options.find(option => {
        return option.value === defaultValue;
      })}
      onChange={(newValue) => {
        newValue && onChange(filter, newValue.value);
      }}
    />
  );
}