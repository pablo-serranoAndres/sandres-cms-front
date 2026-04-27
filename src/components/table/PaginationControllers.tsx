import type { PaginationType } from "@types";
import { Button } from "@components";
import styles from "./Table.module.scss";

export const PaginationControllers = ({
  pagination,
}: {
  pagination: PaginationType;
}) => {
  const { currentSet, totalPages, currentPage, onClick } = pagination;
  console.log(currentSet);
  return (
    <ul className={styles.paginationControllers}>
      {currentSet.length < 3 && (
        <li>
          <Button
            variant={"white"}
            size={"md"}
            type={"button"}
            onClick={() => onClick!()}
            text={"..."}
          />
        </li>
      )}
      {currentSet.map((page, index) => (
        <li key={`li-${index}`}>
          {" "}
          <Button
            key={`pag-btn-${index}`}
            variant={currentPage === page ? "filled" : "white"}
            size={"md"}
            type={"button"}
            onClick={() => onClick!(page)}
            text={page.toString()}
          />
        </li>
      ))}
      {currentSet.length < 3 ? (
        <li>
          <Button
            variant={currentPage === totalPages ? "filled" : "white"}
            size={"md"}
            type={"button"}
            onClick={() => onClick!(totalPages)}
            text={totalPages.toString()}
          />
        </li>
      ) : (
        <>
          <li>
            <Button
              variant={"white"}
              size={"md"}
              type={"button"}
              onClick={() => onClick!()}
              text={"..."}
            />
          </li>
          <li>
            <Button
              variant={currentPage === totalPages ? "filled" : "white"}
              size={"md"}
              type={"button"}
              onClick={() => onClick!(totalPages)}
              text={totalPages.toString()}
            />
          </li>
        </>
      )}
    </ul>
  );
};
