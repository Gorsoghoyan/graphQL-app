import { AbstractItemType, ListViewProps } from "../../types";
import styles from "../../assets/styles/components/ListView.module.scss";
import classnames from "classnames";

export default function ListView<
  T extends AbstractItemType
>({ variant, items, render }: ListViewProps<T>) {
  return (
    <ul className={classnames(
      styles.defaultStyles,
      styles[variant]
    )}>
      {items.map((item) => (
        <li key={item.id}>{render(item)}</li>
      ))}
    </ul>
  );  
}