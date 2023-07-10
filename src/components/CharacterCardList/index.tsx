import { Fragment } from "react";
import { Text } from "../";
import { CardListProps, CardTypes } from "../../types";
import styles from "../../assets/styles/components/cardList.module.scss";

export default function CharacterCardList<T extends CardTypes>({
  listOfData,
  renderItem,
  children
}: CardListProps<T>) {
  return (
    <main className={styles.container}>
      {!listOfData.length ? (
        <Text as="h3">No such data found</Text>
      ) : (
        <Fragment>
          {listOfData.map(item => renderItem(item))}
        </Fragment>
      )}
      {children && (
        <div className={styles.childrenWrapper}>
          {children}
        </div>
      )}
    </main>
  );
}