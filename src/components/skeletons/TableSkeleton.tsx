import styles from "./Skeleton.module.scss";

export const TableSkeleton = ({ rows = 5 }) => {
  return (
    <div className={styles.tableSkeletonContainer}>
      <table className={styles.tableSkeletonRoot}>
        <thead className={styles.tableSkeletonHead}>
          <tr className={styles.tableSkeletonRow}>
            {[...Array(6)].map((_, i) => (
              <th key={i} className={styles.tableSkeletonHeaderCell}>
                <div className={styles.tableSkeletonBarHeader}></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableSkeletonBody}>
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex} className={styles.tableSkeletonRow}>
              {[...Array(6)].map((_, colIndex) => (
                <td key={colIndex} className={styles.tableSkeletonDataCell}>
                  <div
                    className={`
                      ${styles.tableSkeletonBarBody} 
                      ${colIndex === 0 ? styles.tableSkeletonBarBodyPrimary : ""}
                    `}
                  ></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
