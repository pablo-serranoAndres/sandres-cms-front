import classNames from "classnames";
import type { TableProps } from "./Table.types";
import { renderRow } from "./renderRow";
import styles from "./Table.module.scss";

export const Table = ({ theadItems, tbodyItems, animation }: TableProps) => {
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
        {/* <tr className={styles.lastRow}>
          <p>GOLLLLL</p>
        </tr> */}
      </tbody>
    </table>
  );
};
