import type { PaginationType } from "@types";
import { Button } from "@components";
import styles from "./Pagination.module.scss";

// const AfterList = ({
//   lastPage,
//   order,
//   onClick,
// }: {
//   lastPage: number;
//   order: number;
//   onClick?: (pageNumber: number) => void;
// }) => {
//   return (
//     <>
//       {!(order + 3 >= lastPage) && (
//         <Button
//           id={""}
//           variant={"white"}
//           size={"sm"}
//           type={"button"}
//           text={`...`}
//           onClick={() => onClick}
//         />
//       )}

//       <Button
//         id={""}
//         variant={"white"}
//         size={"sm"}
//         type={"button"}
//         text={`${lastPage}`}
//         onClick={() => onClick}
//       />
//     </>
//   );
// };

// const completeCurrentSet = (currentSet: number[]) => {
//   if (currentSet.length < 3) {
//     for (let i = 1; currentSet.length < 3; i++) {
//       currentSet.push(i);
//     }
//   }
//   return currentSet;
// };

export const Pagination = ({ pagination }: { pagination: PaginationType }) => {
  const { currentSet, currentPage, onClick } = pagination;

  // const cmptCurrentSet = completeCurrentSet(currentSet);

  return (
    <ul className={styles.paginationControllers}>
      <li>
        <Button
          id={""}
          variant={"white"}
          size={"sm"}
          type={"button"}
          text={``}
          icon={{
            color: "black",
            size: "sm",
            variant: "previous",
            id: "",
          }}
          onClick={() => onClick?.(8888)}
        />
      </li>

      {currentSet.map((page, index) => (
        <li key={`pagination-list-${index}`}>
          <Button
            id={""}
            variant={currentPage === page ? "filled" : "white"}
            size={"sm"}
            type={"button"}
            text={`${page}`}
            onClick={() => onClick?.(page)}
          />
          {/* {cmptCurrentSet.length === page && (
            <AfterList lastPage={totalPages} order={page} />
          )} */}
        </li>
      ))}
      <li>
        <Button
          id={""}
          variant={"white"}
          size={"sm"}
          type={"button"}
          text={``}
          icon={{ color: "black", size: "sm", variant: "next", id: "" }}
          onClick={() => onClick?.(9999)}
        />
      </li>
    </ul>
  );
};
