import classNames from "classnames";
import type { TableProps } from "./Table.types";
import { renderRow } from "./renderRow";
import { PaginationControllers } from "./PaginationControllers";
import styles from "./Table.module.scss";

export const Table = ({
  theadItems,
  tbodyItems,
  animation,
  pagination,
}: TableProps) => {
  const tableClassnames = classNames(
    styles.dataTable,
    styles[`tableAnimation_${animation}`],
  );

  return (
    <table className={tableClassnames}>
      <thead className={styles.dataTable_headers}>
        <tr>
          {theadItems.map((th, index) => (
            <th key={`table_th_${index}`}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.dataTable_body}>
        {tbodyItems.map((tr, index) => renderRow(tr, index))}
        {pagination && (
          <tr className={styles.dataTable_lastRow}>
            <td colSpan={4}></td>
            <td colSpan={2}>
              <PaginationControllers pagination={{ ...pagination }} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
