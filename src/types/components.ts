import { ApolloError } from "@apollo/client";

import { 
  ChildrenProp, 
  FilterOnChangeType, 
  FiltersType, 
  OptionsType 
} from "./general";

// Button types
export type ButtonProps = {
  variant: "circle" | "fetchMore";
} & Omit<React.ComponentProps<"button">, "children">
  & ChildrenProp;

// Input types
type InputType = {
  variant: "primary" | "secondary";
};

export type InputProps = React.ComponentProps<"input"> & InputType;

// Text types
type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "appColor2" | "errorMessage";
  background?: "Alive" | "Dead" | "unknown";
  as?: E;
} & ChildrenProp;

export type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<
  React.ComponentProps<E>,
  keyof TextOwnProps<E>
>;

// ListView types
export type ListViewProps<T> = {
  variant: "navbar"
  items: T[];
  render: (item: T) => React.ReactNode;
};

export type AbstractItemType = {
  id: number | string;
};

// ImageDiv types 
export type ImageDivProps = {
  imgURL: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

// CardList types
export type CardListProps<T> = {
  loading?: boolean;
  listOfData: T[];
  spinnerVariant?: "primary";
  renderItem: (item: T) => React.ReactNode;
  children?: React.ReactNode;
};

export type CardTypes = {
  id: string;
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
  location: {
    name: string;
  };
  linkWork?: boolean;
};

// Spinner types
export type SpinnerProps = {
  variant?: "primary";
  size?: number;
  thickness?: number;
};

// ErrorMessage types 
export type ErrorMessageProps = {
  message: string;
};

// PageWrapper types
export type PageWrapperProps = {
  loading: boolean;
  error: ApolloError | undefined;
  children: React.ReactNode;
};

// Pagination types
export type PaginationProps = {
  totalPagesNumber: number;
  currentPage: number | undefined;
  onPageChange: (pageNumber: number) => void;
};

// Filters types
export type CharacterFiltersProps = {
  status: string;
  gender: string;
  species: string;
} & FilterOnChangeType;

// SelectBox types 
export type SelectBoxProps = {
  placeholder: string;
  defaultValue: string;
  options: OptionsType[];
  filter: FiltersType;
} & FilterOnChangeType;

// PickSelect types
export type PickSelectProps = {
  total: number;
  title: "Location" | "Episodes";
};