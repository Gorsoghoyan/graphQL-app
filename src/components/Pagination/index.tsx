import ReactPaginate from "react-paginate";
import { PaginationProps } from "../../types";
import styles from "../../assets/styles/components/pagination.module.scss";
import classnames from "classnames";

export default function Pagination({
  totalPagesNumber,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  return (
    <ReactPaginate
      nextLabel={"Next"}
      previousLabel={"Prev"}
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={0}
      pageCount={totalPagesNumber}
      forcePage={currentPage === 1 ? 0 : currentPage - 1}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      nextClassName={classnames(styles.item, styles.next)}
      pageClassName={classnames(styles.item, styles.paginationPage)}
      previousClassName={classnames(styles.item, styles.previous)}
      breakClassName={styles.break}
      activeClassName={styles.active}
      containerClassName={styles.pagination}
      disabledClassName={styles.disabledPage}
    />
  );
}