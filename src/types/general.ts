
export type FiltersType = "status" | "gender" | "species";

export type ChildrenProp = {
  children: React.ReactNode;
};

export type FilterOnChangeType = {
  onChange: (
    filter: FiltersType,
    newValue: string
  ) => void;
};

export type OptionsType = {
  value: string;
  label: string;
};