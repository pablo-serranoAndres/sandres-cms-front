import { Button, Table, TableSkeleton, Tabs, Text } from "@components";
import { useEffect, useState } from "react";
import { CONTENT_SERVICE_MAP, getTabKeys } from "@services";
import styles from "./Content.module.scss";
import type { ContentTabType, ItemSetType, PaginationType } from "@types";

// const TAB_KEYS = getTabKeys();

interface ActiveItemsProps {
  id: ContentTabType;
  dataset: ItemSetType;
  previousOrder: number;
  currentOrder: number;
  pagination: PaginationType;
}

export const Content = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<ActiveItemsProps>({
    id: "all_contents",
    dataset: { theadItems: [], tbodyItems: [] },
    previousOrder: 0,
    currentOrder: 0,
    pagination: {
      currentSet: [1, 2, 3],
      totalPages: 17,
      currentPage: 1,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const service = CONTENT_SERVICE_MAP[activeTab.id];
        const values = await service();

        setActiveTab({
          ...activeTab,
          dataset: values,
          pagination: {
            totalPages: 13,
            currentSet: [1, 2, 3],
            // totalPages: Math.ceil(values.tbodyItems.length / 13),
            // currentSet: Array.from(
            //   { length: Math.ceil(values.tbodyItems.length / 13) },
            //   (_, i) => i + 1,
            // ),
            currentPage: 1,
            onClick: handlePaginationClick,
          },
        });
      } catch (error) {
        alert(`Error cargando datos: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [activeTab.id]);

  const handleTabChange = (id: string, index: number) => {
    setActiveTab({
      ...activeTab,
      id: id as ContentTabType,
      previousOrder: activeTab.currentOrder,
      currentOrder: index,
    });
  };

  const handlePaginationClick = (newPage?: number) => {
    console.log("4. TotalPages:", activeTab.pagination.totalPages);
    if (newPage === activeTab.pagination.totalPages) {
      const newCurrentSet = [newPage - 2, newPage - 1];

      setActiveTab({
        ...activeTab,
        pagination: {
          ...activeTab.pagination,
          currentPage: newPage,
          currentSet: newCurrentSet,
        },
      });
    } else if (
      newPage === undefined &&
      activeTab.pagination.currentSet[
        activeTab.pagination.currentSet.length - 1
      ] +
        1 ===
        activeTab.pagination.totalPages
    ) {
      let length = 3;

      while (1 + length > activeTab.pagination.totalPages) {
        length--;
      }

      const newCurrentSet = Array.from({ length: length }, (_, i) => i + 1);

      setActiveTab({
        ...activeTab,
        pagination: {
          ...activeTab.pagination,
          currentPage: newCurrentSet[0],
          currentSet: newCurrentSet,
        },
      });

      console.log("volver al principio");
    } else if (newPage != null) {
      setActiveTab({
        ...activeTab,
        pagination: {
          ...activeTab.pagination,
          currentPage: newPage,
        },
      });
    } else {
      let length = 3;
      const firstIndex =
        activeTab.pagination.currentSet[
          activeTab.pagination.currentSet.length - 1
        ];

      while (firstIndex + length > activeTab.pagination.totalPages) {
        length--;
      }

      const newCurrentSet = Array.from(
        { length: length },
        (_, i) => i + firstIndex,
      );

      setActiveTab({
        ...activeTab,
        pagination: {
          ...activeTab.pagination,
          currentPage: newCurrentSet[0],
          currentSet: newCurrentSet,
        },
      });
    }
  };

  return (
    <section className={styles.contentLibrary}>
      <div className={styles.contentLibrary_intro}>
        <div>
          <Text tag={"h1"} text={"Biblioteca de contenido"} />
          <Text
            tag={"span"}
            text={
              "Gestiona y monitoriza todas las películas, series y diarios."
            }
          />
        </div>
        <div className={styles.contentLibrary_intro_btns}>
          <Button
            variant={"white"}
            size={"sm"}
            type={"button"}
            text={"Filtrar"}
            icon={{ variant: "filter", color: "grey", size: "sm" }}
          />
          <Button
            variant={"white"}
            size={"md"}
            type={"button"}
            text={"Recientes"}
            icon={{ variant: "sort", color: "grey", size: "sm" }}
          />
          <Button
            variant={"filled"}
            size={"md"}
            type={"button"}
            text={"Guardar contenido"}
            icon={{ variant: "save", color: "white", size: "md" }}
          />
        </div>
      </div>
      <Tabs
        tabs={getTabKeys()}
        focusTab={activeTab.currentOrder}
        onClick={handleTabChange}
      >
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table
            key={activeTab.id}
            animation={
              activeTab.previousOrder > activeTab.currentOrder
                ? "left"
                : "right"
            }
            theadItems={activeTab.dataset.theadItems}
            tbodyItems={activeTab.dataset.tbodyItems}
            pagination={{
              ...activeTab.pagination,
              onClick: handlePaginationClick,
            }}
          />
        )}
      </Tabs>
    </section>
  );
};
